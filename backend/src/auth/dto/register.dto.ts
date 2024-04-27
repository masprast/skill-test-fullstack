import { IsEmail, IsString } from 'class-validator';
// import { ObjectId } from 'mongodb';

export class RegisterDto {
  // _id: ObjectId | string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
