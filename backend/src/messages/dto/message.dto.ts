import { IsString, MaxLength } from 'class-validator';

export class MessageDto {
  @IsString()
  user: string;

  @IsString()
  channel: string;

  @IsString()
  @MaxLength(200, { message: 'max: 200 character' })
  message: string;

  @IsString()
  created: Date;
}
