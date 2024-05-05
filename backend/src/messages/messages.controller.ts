import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { MessageDto } from './dto/message.dto';
import { JWTAuthGuard } from '@src/guards/auth.guards';
import { SerializeUser } from '@src/common/decorator/gettoken.decorator';

@ApiTags('Messages')
@ApiResponse({
  status: 501,
  description: 'no websocket connection',
})
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @UseGuards(JWTAuthGuard)
  @Get()
  @ApiBearerAuth('x-access-token')
  //   @ApiHeader({ name: 'x-access-token', description: 'Access Token' })
  async getAllMessage(channel: string) {
    return await this.messageService.findAllMessage(channel);
  }

  @UseGuards(JWTAuthGuard)
  @Post('create')
  @ApiBearerAuth('x-access-token')
  async createMessage(@Body() messageDto: MessageDto) {
    return await this.messageService.create(messageDto);
  }

  @UseGuards(JWTAuthGuard)
  @Get('/channel')
  @ApiBearerAuth('x-access-token')
  // @ApiHeader({ name: 'x-access-token', description: 'Access Token' })
  async listChannel(@SerializeUser() userid: object) {
    return this.messageService.listChannel(userid['sub']);
  }

  @UseGuards(JWTAuthGuard)
  @Get('/:channel')
  @ApiBearerAuth('x-access-token')
  async getChannel(@Param() channel: string) {
    return this.messageService.getChannel(channel);
  }

  @UseGuards(JWTAuthGuard)
  @Get('/search')
  @ApiBearerAuth('x-access-token')
  async findAllMessages(@Body() message: string) {
    // const decoded = this.messageService.decodeToken(token);
    return this.messageService.findAllMessage(message);
  }
}
