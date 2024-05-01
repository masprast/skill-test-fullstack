import { IsArray, IsString } from 'class-validator';

export class ChannelDto {
  @IsString()
  name: string;

  @IsArray()
  users: string[];

  @IsArray()
  messages: string[];
}
