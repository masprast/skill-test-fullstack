import { Exclude, Expose } from 'class-transformer';
import { Types } from 'mongoose';

export class UserDto {
  constructor(partial: Partial<UserDto>) {
    Object.assign(partial);
  }
  @Expose()
  _id: Types.ObjectId;

  username: string;

  email: string;

  @Exclude()
  password: string;

  name: string;

  birthday: string;

  height: number;

  weight: number;

  interests: string[];
}
