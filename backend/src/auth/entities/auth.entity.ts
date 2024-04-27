import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true, collection: 'refreshtokens' })
export class RefreshToken {
  // @Prop({ type: Types.ObjectId })
  // _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', unique: true })
  user: Types.ObjectId;

  // @Prop({ type: String })
  // accessToken: string;

  @Prop({ type: String })
  refreshtoken: string;
}

export type RefreshTokenDocument = RefreshToken & Document;
export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
