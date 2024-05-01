import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: false })
class Message {
  @Prop()
  user: string;

  @Prop()
  channel: string;

  @Prop()
  messages: string;

  @Prop()
  created: Date;
}

@Schema({ timestamps: true })
class Channel {
  @Prop()
  name: string;

  @Prop()
  users: string[];

  @Prop()
  messages: string[];
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
