import { User } from './user.entity/user.entity';
import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params) {
    return this.userService.getUser(params.id);
  }

  @Post()
  saveUser(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @Put(':id')
  updateUserByUsButBANCAL(
    @Body()
    userBody: {
      email: string;
      firstname: string;
      lastname: string;
      password: string;
    },
    @Param() params,
  ) {
    const userId: number = params.id;
    const user: User = { id: userId, ...userBody };
    return this.userService.saveUser(user);
  }

  @Put()
  updateUser(
    @Body()
    userBody: User,
  ) {
    return this.userService.saveUser(userBody);
  }

  @Delete()
  deleteUser(@Body() user: User) {
    return this.userService.deleteUser(user);
  }
}
