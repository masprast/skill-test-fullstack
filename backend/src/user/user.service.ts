import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import {
  Horoscope,
  HoroscopeDocument,
  Zodiac,
  ZodiacDocument,
} from '@src/zoho/entities/zoho.entities';
import { ubahTanggal } from '@src/utils/dateConverter';

interface IUser {
  email?: string;
  username?: string;
  password?: string;
  name?: string;
  birthday?: string;
  horoscope?: string;
  zodiac?: string;
  height?: number;
  weight?: number;
  interests?: string[];
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Zodiac.name)
    private readonly zodiacModel: Model<ZodiacDocument>,
    @InjectModel(Horoscope.name)
    private readonly horoscopeModel: Model<HoroscopeDocument>,
  ) {}

  async create(user: User): Promise<CreateUserDto> {
    const createdUser = new this.userModel(user);
    const userBaru = await createdUser.save();
    delete userBaru.password;
    return userBaru;
  }

  async cekEmailUsername(username: string, email: string) {
    const adaUsername = await this.userModel
      .findOne({ username: username })
      .exec();
    const adaEmail = await this.userModel.findOne({ email: email }).exec();

    if (adaUsername || adaEmail)
      throw new ConflictException('User already exists');
    return true;
  }

  async findOne(username: string, email: string) {
    const adaUser = await this.userModel.findOne(
      { username: username, email: email },
      { __v: 0 },
    );

    if (!adaUser) return null;

    return adaUser;
  }

  async findById(id: string) {
    const adaUser = await this.userModel
      .findById(id, { _id: 0, password: 0, __v: 0 })
      .exec();
    if (!adaUser) {
      throw new NotFoundException('Pengguna tidak ditemukan');
    }
    return adaUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    let updatedData: IUser = {};
    updatedData = { ...updateUserDto };

    if (updateUserDto.birthday) {
      const tanggal = ubahTanggal(updateUserDto.birthday);
      const zoho = await this.zohoAggregate(tanggal);
      //      {
      //   _id: new ObjectId("6630b909deb39ac3feb13d2c"),
      //   tanggal_awal: '1922 January 28',
      //   tanggal_akhir: '1923 February 15',
      //   zodiac: 'Dog',
      //   __v: 0,
      //   parsedAwal: 1922-01-28T00:00:00.000Z,
      //   parsedAkhir: 1923-02-15T00:00:00.000Z
      //                2002-12-05T17:00:00.000Z
      // },
      updatedData = { ...updateUserDto, ...zoho };
      // console.log(updatedData, tanggal, zoho);
    }

    await this.userModel.findByIdAndUpdate(id, updatedData, { new: true });

    const updatedUser = await this.userModel.findById(id, {
      password: 0,
      _id: 0,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    console.log(updatedUser);

    return updatedUser;
  }

  private async zohoAggregate(
    tgl: Date,
  ): Promise<{ zodiac: string; horoscope: string }> {
    const zodiac = await this.zodiacModel
      .aggregate([
        ...this.aggregateFilterZodiac(tgl),
        { $project: { zodiac: 1, _id: 0 } },
      ])
      .limit(1);

    const horoscope = await this.horoscopeModel
      .aggregate([
        ...this.aggregateFilterhoroscope(tgl),
        { $project: { horoscope: 1, _id: 0 } },
      ])
      .limit(1);

    return { zodiac: zodiac[0].zodiac, horoscope: horoscope[0].horoscope };
  }

  private aggregateFilterZodiac(tgl: Date) {
    return [
      {
        $set: {
          parsedAwal: {
            $dateFromString: {
              dateString: '$tanggal_awal',
              format: '%Y %B %d',
            },
          },
        },
      },
      {
        $set: {
          parsedAkhir: {
            $dateFromString: {
              dateString: '$tanggal_akhir',
              format: '%Y %B %d',
            },
          },
        },
      },
      {
        $match: {
          $and: [
            {
              parsedAwal: {
                $lte: tgl,
                $gte: new Date(tgl.getFullYear() - 1, 0, 1, 0, 0, 0),
              },
            },
            {
              parsedAkhir: {
                $gte: tgl,
                $lte: new Date(Date.now()),
              },
            },
          ],
        },
      },
      { $unset: ['parsedAwal', 'parsedAkhir'] },
    ];
  }

  private aggregateFilterhoroscope(tgl: Date) {
    return [
      {
        $set: {
          parsedAwal: {
            $dateFromString: {
              dateString: {
                $concat: [`${tgl.getFullYear()}`, ' ', '$tanggal_awal'],
              },
              format: '%Y %B %d',
            },
          },
        },
      },
      {
        $set: {
          parsedAkhir: {
            $dateFromString: {
              dateString: {
                $concat: [`${tgl.getFullYear()}`, ' ', '$tanggal_akhir'],
              },
              format: '%Y %B %d',
            },
          },
        },
      },
      {
        $match: {
          $and: [
            {
              parsedAwal: {
                $lte: tgl,
                $gte: new Date(tgl.getFullYear() - 1, 0, 1, 0, 0, 0),
              },
            },
            {
              parsedAkhir: {
                $gte: tgl,
                $lte: new Date(Date.now()),
              },
            },
          ],
        },
      },
      { $unset: ['parsedAwal', 'parsedAkhir'] },
    ];
  }
}
