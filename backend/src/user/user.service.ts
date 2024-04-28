import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const createdUser = new this.userModel(createUserDto, { password: 0 });
    const user = await createdUser.save();
    return user;
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userModel.find({}, { password: 0 });
  }

  async findOne(username?: string, email?: string) {
    const adaUser = await this.userModel
      .findOne({ username: username } ?? { email: email }, { password: 0 })
      .exec();
    if (!adaUser) {
      throw new NotFoundException('Pengguna tidak ditemukan');
    }
    return adaUser;
  }

  async findById(id: string) {
    const adaUser = await this.userModel.findById(id, { password: 0 }).exec();
    if (!adaUser) {
      throw new NotFoundException('Pengguna tidak ditemukan');
    }
    return adaUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    const updatedUser = this.userModel.findById(id, {
      password: 0,
    }) as unknown as User;
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
