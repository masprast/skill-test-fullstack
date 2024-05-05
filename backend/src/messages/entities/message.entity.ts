import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema()
class Message {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'users' })
  user: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'channel' })
  channel: Types.ObjectId;

  @Prop()
  message: string;

  @Prop()
  created: Date;
}

@Schema()
class Channel {
  @Prop()
  name: string;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'users', default: [] })
  users?: Types.ObjectId[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'message', default: [] })
  messages?: string[];
}

type MessageDocument = HydratedDocument<Message>;
type ChannelDocument = HydratedDocument<Channel>;

const MessageSchema = SchemaFactory.createForClass(Message);
const ChannelSchema = SchemaFactory.createForClass(Channel);

export {
  Message,
  MessageDocument,
  MessageSchema,
  Channel,
  ChannelDocument,
  ChannelSchema,
};
