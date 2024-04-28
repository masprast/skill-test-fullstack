import fs from 'fs';
import { parse } from 'csv';
import {
  Horoscope,
  IHoroscope,
  IZodiac,
  Zodiac,
} from './model/horoscope_zodiac';
import path from 'path';

const izodiac: IZodiac[] = [],
  ihoroscope: IHoroscope[] = [];

fs.createReadStream(
  path.resolve(__dirname, '../assets/data/ZodiacCalculation.csv'),
)
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', (baris) => {
    izodiac.push({
      tanggal_awal: baris[0],
      tanggal_akhir: baris[1],
      zodiac: baris[2],
    });
  });

fs.createReadStream(
  path.resolve(__dirname, '../assets/data/HoroscopeCalculation.csv'),
)
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', (baris) => {
    ihoroscope.push({
      horoscope: baris[0],
      tanggal_awal: baris[1],
      tanggal_akhir: baris[2],
    });
  });

function initHoroscopeZodiac() {
  izodiac.forEach(async (z) => {
    const zodiac = await Zodiac.create(z);
    await zodiac.save();
    console.log('ngisi zodiac');
  });
  ihoroscope.forEach(async (h) => {
    const horoscope = await Horoscope.create(h);
    await horoscope.save();
  });

  console.log('konek DB --> lanjut ngisi data horoscope & zodiac');
}

export default { initHoroscopeZodiac } as const;
