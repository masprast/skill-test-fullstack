import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthDto {
  @ApiProperty({ type: 'string' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  username: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @MinLength(8, { message: 'at least 8 character' })
  password: string;
}
