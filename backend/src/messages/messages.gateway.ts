import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Server } from 'socket.io';
import { MessageDto } from './dto/message.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class MessagesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesService: MessagesService) {}
  private readonly logger = new Logger(MessagesGateway.name);
  private users = 0;

  @WebSocketServer() server: Server;

  afterInit(server: any) {
    this.logger.log(`initializing ${server}...`);
  }
  handleConnection(client: any, ...args: any[]) {
    const socket = this.server.sockets;
    this.users++;

    this.logger.log(`client.id: ${client.id} is connected`);
    this.logger.debug(`connected clients: ${socket.sockets.size}`);
    this.logger.debug(`args: ${args}`);
    this.server.emit('users', this.users);
  }
  handleDisconnect(client: any) {
    this.users--;
    this.logger.log(`client.id: ${client.id} is disconnected`);
    this.server.emit('users', this.users);
  }

  @SubscribeMessage('messasge')
  handleMessages(client: any, @MessageBody() message: string) {
    this.logger.log(`message received from ${client.id}`);
    this.logger.debug(`payload: ${message}`);
    this.server.emit('message', message);
  }

  // @SubscribeMessage('message')
  // async onChat(client: any, message: string) {
  //   client.broadcast.emit('chat', message);
  // }

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: MessageDto) {
    await this.messagesService.create(createMessageDto);
    this.server.emit('msgtoclient', createMessageDto);
  }

  @SubscribeMessage('listMessages')
  async findAll(@MessageBody() text: string, idchanel: string) {
    await this.messagesService.findMessageInChanel(text, idchanel);
  }

  // @SubscribeMessage('findOneMessage')
  // async findOne(@MessageBody() id: string) {
  //   return await this.messagesService.findOneMessage(id);
  // }
}
