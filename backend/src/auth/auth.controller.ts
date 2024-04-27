import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/token.dto';
import { User } from 'src/users/entities/user.entity';
import { SerializeUser } from 'src/common/decorator/serialize-user.decorator';
import { AccessTokenGuard } from 'src/guards/accesstoken.guard';
import { RefreshTokenGuard } from 'src/guards/refreshtoken.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(AccessTokenGuard)
  @Get('getprofile')
  getProfile(@Req() req: Request) {
    const token = req.headers.get('Authorization').split(' ')[1];
    return this.authService.getProfile(token);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refreshtoken')
  async refreshToken(
    @SerializeUser() user: User,
    @Body() dto: RefreshTokenDto,
  ) {
    return this.authService.refreshToken(user, dto);
  }
}
