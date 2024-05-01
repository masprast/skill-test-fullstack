import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {
  @ApiProperty({ type: 'string' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'at least 8 character' })
  password: string;
}
