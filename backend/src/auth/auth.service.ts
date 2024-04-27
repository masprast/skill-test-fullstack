import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken, RefreshTokenDocument } from './entities/auth.entity';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { deHash, hash } from 'src/common/encryption/encryption';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import {
  JwtConfig,
  Payload,
  accessTokenConfig,
  refreshTokenConfig,
} from 'src/utils/jwt.config';
import { RefreshTokenDto } from './dto/token.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(RefreshToken.name)
    private tokenModel: Model<RefreshTokenDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existedUser = await this.userModel.findOne({
      $or: [{ email: registerDto.email }, { username: registerDto.username }],
    });
    if (existedUser) {
      throw new BadRequestException('User with this email already existed');
    }
    const hashed_password = await hash(registerDto.password);
    const newUser = await this.userModel.create({
      ...registerDto,
      password: hashed_password,
    });
    const payload: Payload = {
      email: registerDto.email,
      sub: newUser.id,
    };
    const accessToken = this.generateJWT(payload, accessTokenConfig());
    const refreshToken = this.generateJWT(payload, refreshTokenConfig());

    await this.tokenModel.create({
      user: newUser.id,
      refreshtoken: refreshToken,
    });

    // return newUser.save();
    return { access_token: accessToken };
  }

  async login(loginDto: LoginDto) {
    const existedUser = await this.userModel.findOne({
      // username: loginDto.username,
      email: loginDto.email,
    });
    if (!existedUser) {
      throw new NotFoundException('User not found');
    }

    const verifyPass = await deHash(loginDto.password, existedUser.password);
    if (!verifyPass) {
      throw new UnauthorizedException('Invalid credential');
    }

    const payload: Payload = {
      email: existedUser.email,
      sub: existedUser._id,
    };

    const accessToken = this.generateJWT(payload, accessTokenConfig());
    const refreshToken = this.generateJWT(payload, refreshTokenConfig());

    const doc = await this.tokenModel.findOne({ user: existedUser._id });
    if (doc) {
      await this.tokenModel.findOneAndUpdate(
        { _id: doc._id },
        { refreshtoken: refreshToken },
      );

      return { access_token: accessToken, refresh_token: refreshToken };
    }

    await this.tokenModel.create({
      // _id: new ObjectId(),
      user: existedUser._id,
      refreshtoken: refreshToken,
    });

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  // async getprofile(authtoken: string) {
  //   const token = authtoken.split(' ')[1];
  //   const existedToken = await this.findToken(token);
  //   if (!existedToken) {
  //     throw new UnauthorizedException('Access denied');
  //   }
  //   const user = this.userModel.findById(existedToken.user);
  //   return user;
  // }
  // async findUserById(id: string) {
  //   return this.userModel.findById(new ObjectId(id));
  // }

  async decodeToken(token: string) {
    return this.jwtService.decode(token);
  }

  async getProfile(authToken: string) {
    const acceptedToken = this.jwtService.verify(authToken);
    if (!acceptedToken) {
      throw new ForbiddenException('Expired token');
    }
    const userid = this.jwtService.decode(authToken);
    console.log(userid);

    const user = await this.userModel.findById(userid);
    return user;
  }

  // proses generate token
  // ====================================
  private generateJWT(payload: Payload, jwtConfig: JwtConfig) {
    return this.jwtService.sign(payload, {
      secret: jwtConfig.secret,
      expiresIn: jwtConfig.expiresIn,
    });
  }

  async refreshToken(user: User, refreshTokenDto: RefreshTokenDto) {
    const existedToken = await this.findToken(refreshTokenDto.refreshtoken);
    if (!existedToken) {
      throw new ForbiddenException('Invalid credential');
    }

    const payload: Payload = {
      email: user.email,
      sub: (await this.userModel.findOne({ email: user.email })).id,
    };
    const accessToken = this.generateJWT(payload, accessTokenConfig());

    return { access_token: accessToken };
  }

  async createRefreshToken(refreshtoken: RefreshToken) {
    return this.findToken(refreshtoken.refreshtoken)
      .then(async (token) => {
        if (token) {
          throw new BadRequestException('Token already exist');
        }
        const newRefreshtoken = await this.tokenModel.create({
          _id: new ObjectId(),
          ...refreshtoken,
        });
        return newRefreshtoken.save();
      })
      .catch((r) => {
        throw new BadRequestException(`Token already exist => ${r}`);
      });
  }

  async updateRefreshToken(token: RefreshToken, user: Partial<RefreshToken>) {
    return this.tokenModel.findOneAndUpdate({ refreshtoken: token }, user, {
      new: true,
    });
  }

  private async findToken(token: string) {
    const existedTokenUser = await this.tokenModel.findOne(
      {
        refreshtoken: token,
      },
      'user refreshtoken',
    );
    if (!existedTokenUser) {
      throw new ForbiddenException('Access denied');
    }
    return existedTokenUser;
  }
}
