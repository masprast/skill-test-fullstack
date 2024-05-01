import { IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  name?: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  birthday?: string;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  height?: number;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  weight?: number;

  @ApiProperty({ type: 'array', items: { type: 'string' } })
  @IsArray()
  interests?: string[];
}
