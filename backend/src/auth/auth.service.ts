import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@src/user/entities/user.entity';
import { Model } from 'mongoose';
import { UserService } from '@src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) // private userService: UserService,
  {}

  async create(createAuthDto: CreateAuthDto): Promise<CreateAuthDto> {
    const adaUser = await this.userModel.findOne({
      email: createAuthDto.email,
    });
    if (adaUser) {
      throw new ConflictException('User sudah ada');
    }
    const userData: User = {
      name: '',
      birthday: '',
      height: 0,
      weight: 0,
      horoscope: '',
      zodiac: '',
      interests: [],
      ...createAuthDto,
    };
    await this.userModel.create(userData);
    return createAuthDto;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(
    id: string,
    updateAuthDto: UpdateAuthDto,
  ): Promise<UpdateAuthDto> {
    const adaUser = await this.userModel.findById(id);
    if (!adaUser) {
      throw new NotFoundException('User tidak ditemukan');
    }
    const dataBaru = { ...adaUser.toObject(), ...updateAuthDto };
    await this.userModel.findByIdAndUpdate(id, dataBaru);
    return updateAuthDto;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
