import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Headers,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JWTAuthGuard } from '@src/guards/auth.guards';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JWTAuthGuard)
  @Post('createProfile')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiHeader({ name: 'x-access-token', description: 'Access Token' })
  async create(
    @Headers('x-access-token') accessToken: string,
    @Body() createUserDto: CreateUserDto,
  ) {
    const verifikasi = await this.jwtService.verifyAsync(accessToken, {
      secret: process.env.JWT_SECRET,
    });
    if (!verifikasi) throw new UnauthorizedException('Token has been expired');

    const decoded = this.jwtService.decode(accessToken);
    // const user = await this.userService.findById(decoded.sub);
    const user = await this.userService.update(decoded.sub, createUserDto);

    return { message: 'Profile has been updated successfully', data: user };
    // return this.userService.create(user);
  }

  @UseGuards(JWTAuthGuard)
  @Get('getProfile')
  @ApiHeader({
    name: 'x-access-token',
    description: 'Access Token',
  })
  async findOne(@Headers('x-access-token') accessToken: string) {
    const decoded = this.jwtService.decode(accessToken);
    const user = await this.userService.findById(decoded.sub);
    delete user.password;
    return {
      message: 'Profile has been found successfully',
      data: user,
    };
  }

  @UseGuards(JWTAuthGuard)
  @Put('updateProfile')
  @ApiHeader({ name: 'x-access-token', description: 'Access Token' })
  async update(
    @Headers('x-access-token') accessToken: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const decoded = this.jwtService.decode(accessToken);
    return this.userService.update(decoded.sub, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(id);
  // }
}
