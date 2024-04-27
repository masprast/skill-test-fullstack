import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'users' })
export class User {
  // @Prop({ type: SchemaTypes.ObjectId })
  // _id: ObjectId;

  @Prop({ type: SchemaTypes.String, unique: true })
  username: string;

  @Prop({ type: SchemaTypes.String, unique: true })
  email: string;

  @Prop({ type: SchemaTypes.String })
  password: string;

  @Prop({ type: SchemaTypes.String })
  name: string;

  @Prop({ type: SchemaTypes.String })
  birthday: string;

  @Prop({ type: Number, default: 0 })
  height: number;

  @Prop({ type: Number, default: 0 })
  weight: number;

  @Prop({ type: [SchemaTypes.String] })
  interests: string[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
