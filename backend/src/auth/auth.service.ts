import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { deHash, hash } from '@src/common/encryption/encryption';
import { UserService } from '@src/user/user.service';
import { User } from '@src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Payload } from '@src/utils/jwt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const adaUser = await this.userService.findOne(
      loginDto.username,
      loginDto.email,
    );
    if (!adaUser) throw new ForbiddenException('There is no such User data');

    const verifikasi = await this.validateUser(loginDto);
    if (!verifikasi) throw new UnauthorizedException('Invalid credential');

    const payload: Payload = {
      sub: String(adaUser._id),
      email: loginDto.email,
    };
    const token = this.jwtService.sign(payload);
    return {
      message: 'User has been logged in successfully',
      accessToken: token,
    };
    // return { pesan: 'login', data: loginDto };
  }

  async register(registerDto: RegisterDto) {
    const adaUser = await this.userService.cekEmailUsername(
      registerDto.username,
      registerDto.email,
    );

    if (!adaUser) {
      // throw new BadRequestException('User already exist');
      return { message: 'User already exists' };
    }

    const hashed = await hash(registerDto.password);
    const dataUserBaru: RegisterDto = { ...registerDto, password: hashed };
    const userBaru: User = { ...dataUserBaru };
    await this.userService.create(userBaru);

    return { message: 'User has been created successfully' };
  }

  async validateUser(loginDto: LoginDto) {
    const adaUser = await this.userService.findOne(
      loginDto.username,
      loginDto.email,
    );

    if (!adaUser) return null;

    console.log(loginDto.password, adaUser.password);
    const verifikasi = await deHash(loginDto.password, adaUser.password);
    if (!verifikasi) {
      throw new UnauthorizedException('Unauthorized');
    }

    if (adaUser && verifikasi) return adaUser;

    // return adaUser;
    // return { pesan: 'verifikasi', data: loginDto };
  }
}
