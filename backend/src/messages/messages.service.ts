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
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@src/user/user.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
    @InjectModel(Channel.name)
    private readonly channelModel: Model<ChannelDocument>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  private logger = new Logger(MessagesService.name);

  async create(createMessageDto: MessageDto) {
    let adaChannel = await this.channelModel.findOne({
      name: createMessageDto.channel,
    });
    const user = await this.userService.findOneByUsername(
      createMessageDto.user,
    );

    if (!adaChannel) {
      const newChannel: Channel = {
        name: createMessageDto.channel,
      };
      const savedChannel = new this.channelModel(newChannel);
      await savedChannel.save();

      adaChannel = savedChannel;
    }

    const newMessageDto = {
      user: user.id,
      channel: adaChannel.id,
      message: createMessageDto.message,
      created: new Date(Date.now()),
    };
    const createdMessage = new this.messageModel(newMessageDto);
    const savedMessage = await createdMessage.save();
    const cariUserDiChannel = await this.channelModel.findOne({
      name: createMessageDto.channel,
      users: { $in: user.id },
    });
    if (!cariUserDiChannel) {
      const tambahUser = await this.channelModel.findByIdAndUpdate(
        adaChannel.id,
        { $push: { users: user.id } },
      );
      await tambahUser.save();
    }
    // this.logger.log(`user: ${cariUserDiChannel.id}`);

    const updatedChannel = await this.channelModel.findOneAndUpdate(
      { _id: adaChannel.id, users: { $in: user._id } },
      { $push: { messages: savedMessage._id } },
    );
    // const updatedChannel = await this.channelModel.findOne({
    //   _id: adaChannel.id,
    //   users: { $in: user.id },
    // });
    // this.logger.log(updatedChannel);
    await updatedChannel.save();

    return savedMessage;
  }

  async findAllMessage(message: string) {
    return await this.messageModel.find({ message: { $contains: message } });
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

  async getChannel(channel: string) {
    const adaChannel = await this.channelModel.aggregate([
      { $match: { name: channel } },
      // {
      //   $lookup: {
      //     from: 'users',
      //     foreignField: '_id',
      //     localField: 'users',
      //     as: 'users',
      //     pipeline: [{ $project: { name: 1, _id: 0 } }],
      //   },
      // },
      { $project: { _id: 0, __v: 0 } },
    ]);
    // const adaChannel = await this.channelModel
    //   .findOne({ name: channel }, { _id: 0, __v: 0 })
    //   .exec();
    this.logger.log(adaChannel);
    return adaChannel;
  }

  async listChannel(iduser: string) {
    const list = [];
    const adalist = await this.channelModel.find(
      { users: { $in: iduser } },
      { name: 1, _id: 0 },
    );
    adalist.forEach((al) => list.push(al.name));
    return list;
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

  decodeToken(token: string) {
    return this.jwtService.decode(token);
  }
}
