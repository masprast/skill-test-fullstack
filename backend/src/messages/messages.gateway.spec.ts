import { Test, TestingModule } from '@nestjs/testing';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';
import { Socket, io } from 'socket.io-client';

describe('MessagesGateway', () => {
  let gateway: MessagesGateway;
  let ioClient: Socket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesGateway, MessagesService],
    }).compile();

    gateway = module.get<MessagesGateway>(MessagesGateway);
    ioClient = io('http://localhost:3000', {
      autoConnect: false,
      transports: ['websocket', 'polling'],
    });
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should emit "pong" on "ping"', async () => {
    ioClient.connect();
    ioClient.emit('ping', 'Hello world!');
    await new Promise<void>((resolve) => {
      ioClient.on('connect', () => {
        console.log('connected');
      });
      ioClient.on('pong', (data) => {
        expect(data).toBe('Hello world!');
        resolve();
      });
    });
    ioClient.disconnect();
  });
});
