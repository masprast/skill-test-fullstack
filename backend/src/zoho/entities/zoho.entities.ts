import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

class BaseZoHo {
  @Prop()
  tanggal_awal: string;

  @Prop()
  tanggal_akhir: string;
}

@Schema({ collection: 'zodiac' })
export class Zodiac extends BaseZoHo {
  @Prop()
  zodiac: string;
}

@Schema({ collection: 'horoscope' })
export class Horoscope extends BaseZoHo {
  @Prop()
  horoscope: string;
}

export type ZodiacDocument = HydratedDocument<Zodiac>;
export type HoroscopeDocument = HydratedDocument<Horoscope>;

export const ZodiacSchema = SchemaFactory.createForClass(Zodiac);
export const HoroscopeSchema = SchemaFactory.createForClass(Horoscope);
