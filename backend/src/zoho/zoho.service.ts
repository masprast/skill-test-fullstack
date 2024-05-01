import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Horoscope,
  HoroscopeDocument,
  Zodiac,
  ZodiacDocument,
} from './entities/zoho.entities';
import { Model } from 'mongoose';
import { createReadStream } from 'fs';
import path from 'path';
import { parse } from 'csv';

@Injectable()
export class ZohoService {
  constructor(
    @InjectModel(Horoscope.name)
    private readonly horoscopeModel: Model<HoroscopeDocument>,
    @InjectModel(Zodiac.name)
    private readonly zodiacModel: Model<ZodiacDocument>,
  ) {
    console.log('konek DB --> lanjut ngisi data horoscope & zodiac');
  }

  private fileCSV(filecsv: string) {
    const file = createReadStream(path.resolve(__dirname, filecsv));
    return file;
  }

  isiZodiac(csv: string) {
    const file = this.fileCSV(csv);
    file
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', async (baris) => {
        const z: Zodiac = {
          zodiac: baris[2],
          tanggal_awal: baris[0],
          tanggal_akhir: baris[1],
        };
        const zodiac = new this.zodiacModel(z);
        await zodiac.save();
      });
  }

  isiHoroscope(csv: string) {
    const file = this.fileCSV(csv);
    file
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', async (baris) => {
        const h: Horoscope = {
          horoscope: baris[0],
          tanggal_awal: baris[1].trim(),
          tanggal_akhir: baris[2].trim(),
        };
        const horoscope = new this.horoscopeModel(h);
        await horoscope.save();
      });
  }
}
