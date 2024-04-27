import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  async createProfile(id: string, createUserDto: CreateUserDto) {
    // console.log('createUserDto', createUserDto);

    const existedUser = await this.model.findById(id);
    if (!existedUser) {
      throw new NotFoundException('User not found');
    }
    const created = await this.model.findByIdAndUpdate(id, createUserDto, {
      new: true,
    });
    return created.save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findByEmail(email: string) {
    const user = await this.model.findOne({ email: email });
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    return user;
  }

  async updateProfile(id: string, updateUserDto: UpdateUserDto) {
    const existedUser = await this.model.findById(id);
    if (!existedUser) {
      throw new NotFoundException('User not found');
    }
    const updated = await this.model
      .findByIdAndUpdate(id, updateUserDto, {
        new: true,
      })
      .exec();
    return updated.save();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }
  // async findById(id: ObjectId) {
  //   return await this.model.findById(id);
  // }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
