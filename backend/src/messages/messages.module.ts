import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Channel,
  ChannelSchema,
  Message,
  MessageSchema,
} from './entities/message.entity';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { MessagesController } from './messages.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from '@src/user/user.module';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'CHAT_SERVICE',
        imports: [ConfigModule],
        useFactory: async (cs: ConfigService) => {
          const user = cs.get('RABBITMQ_USER');
          const password = cs.get('RABBITMQ_PASSWORD');
          const host = cs.get('RABBITMQ_HOST');
          const queueName = cs.get('RABBITMQ_QUEUE_NAME');
          return {
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://${user}:${password}@${host}`],
              queue: queueName,
              noAck: false,
              queueOptions: { durable: false },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
    MongooseModule.forFeature([
      { name: Message.name, schema: MessageSchema },
      { name: Channel.name, schema: ChannelSchema },
    ]),
    UserModule,
  ],
  providers: [MessagesGateway, MessagesService],
  controllers: [MessagesController],
  // exports: [ClientsModule],
})
export class MessagesModule {}
