import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { SerializeUser } from 'src/common/decorator/serialize-user.decorator';
// import { UserDocument } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AccessTokenGuard } from 'src/guards/accesstoken.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async listUsers() {
    return await this.userService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Post()
  async createProfile(
    @Req() req: Request,
    @Body() createProfile: CreateUserDto,
  ) {
    return this.userService.createProfile(req, createProfile);
  }

  @UseGuards(AccessTokenGuard)
  @Put()
  async updateProfile(
    @Req() req: Request,
    @Body() updateProfile: UpdateUserDto,
  ) {
    return this.userService.updateProfile(req, updateProfile);
  }
}
