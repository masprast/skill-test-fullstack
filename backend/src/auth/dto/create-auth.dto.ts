import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ type: 'string' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  username: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  password: string;
}
