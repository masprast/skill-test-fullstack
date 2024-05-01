import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import {
  Horoscope,
  HoroscopeSchema,
  Zodiac,
  ZodiacSchema,
} from '@src/zoho/entities/zoho.entities';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Zodiac.name, schema: ZodiacSchema },
      { name: Horoscope.name, schema: HoroscopeSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
