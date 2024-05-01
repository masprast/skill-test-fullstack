import { Injectable, Logger } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Channel,
  ChannelDocument,
  Message,
  MessageDocument,
} from './entities/message.entity';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
    @InjectModel(Channel.name)
    private readonly channelModel: Model<ChannelDocument>,
  ) {}
  private logger = new Logger(MessagesService.name);

  async create(createMessageDto: MessageDto) {
    return new this.messageModel(createMessageDto);
  }

  async findAllMessage(channel: string) {
    return await this.messageModel.find({ channel: channel });
  }

  async findMessageInChanel(text: string, channel: string) {
    return await this.messageModel.aggregate([
      { $project: { __v: 0 } },
      {
        $match: {
          $and: [
            { channel: channel },
            { message: { $text: { $search: text, $caseSensitive: false } } },
          ],
        },
      },
    ]);
  }

  async listChannel(iduser: string) {
    this.logger.log(iduser);
    return await this.channelModel.aggregate([]);
  }

  async updateChanel(id: string, namaChanel: string) {
    return await this.channelModel.findByIdAndUpdate(
      id,
      { name: namaChanel },
      { new: true },
    );
  }

  async removeMessage(id: string) {
    return await this.messageModel.findByIdAndDelete(id);
  }

  async removeChannel(id: string) {
    return await this.channelModel.findByIdAndDelete(id);
  }
}
