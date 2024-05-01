import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'berhasil mengisi data horoscope & zodiac ke database mongo',
    };
  }
}
