import { Module } from '@nestjs/common';
import { ZohoService } from './zoho.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Horoscope,
  HoroscopeSchema,
  Zodiac,
  ZodiacSchema,
} from './entities/zoho.entities';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Zodiac.name, schema: ZodiacSchema },
      { name: Horoscope.name, schema: HoroscopeSchema },
    ]),
  ],
  providers: [ZohoService],
  exports: [ZohoService],
})
export class ZohoModule {}
