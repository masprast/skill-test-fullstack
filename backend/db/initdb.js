import { createReadStream } from 'fs';
import { parse } from 'csv';
import { resolve } from 'path';

// mongodb_1  | Could not run js script during database initialization.
// mongodb_1  | Checkout the following file: /docker-entrypoint-initdb.d/initdb.js

// use admin;
db.getSiblingDB('admin');
db.auth('$MONGODB_INITDB_ROOT_USERNAME', '$MONGODB_INITDB_ROOT_PASSWORD');
// use backend;
db.createUser({
  user: '$MONGODB_USER',
  pwd: '$MONGODB_PASS',
  roles: [
    { role: 'dbOwner', db: '$MONGODB_INITDB_DATABASE' },
    'readWriteAnydatabase',
  ],
});
db.grantRolesToUser('$MONGODB_USER', [{ role: 'root', db: 'admin' }]);

db.getSiblingDB('$MONGODB_INITDB_DATABASE');
db.createCollection('horoscope');
db.createCollection('zodiac');

createReadStream(resolve(__dirname, '../src/assets/data/ZodiacCalculation.csv'))
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', (baris) => {
    db.zodiac.insert({
      tanggal_awal: baris[0],
      tanggal_akhir: baris[1],
      zodiac: baris[2],
    });
  });

createReadStream(resolve(__dirname, '../src/assets/data/ZodiacCalculation.csv'))
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', (baris) => {
    db.horoscope.insert({
      horoscope: baris[0],
      tanggal_awal: baris[1],
      tanggal_akhir: baris[2],
    });
  });
