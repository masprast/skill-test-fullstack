import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  birthday: string;

  @Type(() => Number)
  @IsNumber({ allowInfinity: false })
  height: number;

  @Type(() => Number)
  @IsNumber({ allowInfinity: false })
  weight: number;

  interests: string[];
}
