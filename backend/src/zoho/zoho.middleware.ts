import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { ZohoService } from './zoho.service';

@Injectable()
export class ZohoMiddleware implements NestMiddleware {
  constructor(private zohoService: ZohoService) {}
  use(req: any, res: any, next: NextFunction) {
    this.zohoService.isiHoroscope('../assets/data/HoroscopeCalculation.csv');
    this.zohoService.isiZodiac('../assets/data/ZodiacCalculation.csv');
    next();
  }
}
