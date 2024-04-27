import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  // ConnectedSocket,
} from '@nestjs/websockets';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { Server } from 'socket.io';
import { CreateUserDto } from './dto/create-user.dto';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { Headers } from '@nestjs/common';

@WebSocketGateway()
export class UsersGateway {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @WebSocketServer()
  server = Server;

  @SubscribeMessage('createProfile')
  async create(
    // @Req() req: Request,
    @MessageBody() createUserDto: CreateUserDto,
  ) {
    // const token = req.headers('Authorization').split(' ')[1];
    console.log(createUserDto);
  }

  // @SubscribeMessage('findAllUsers')
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @SubscribeMessage('findByEmail')
  findOne(@MessageBody() email: string) {
    return this.usersService.findByEmail(email);
  }

  // @SubscribeMessage('updateUser')
  // update(@MessageBody() updateUserDto: UpdateUserDto) {
  //   return this.usersService.updateProfile(updateUserDto.id, updateUserDto);
  // }

  // @SubscribeMessage('removeUser')
  // remove(@MessageBody() id: string) {
  //   return this.usersService.remove(id);
  // }
}
