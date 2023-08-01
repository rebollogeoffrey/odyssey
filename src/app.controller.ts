import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FilterService } from './filter/filter.service';
import { User } from './entities/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/helleo')
export class FilterName {
  @Get()
  getHello(@Query('name') name: string): string {
    return `Hello ${name}`;
  }
}

@Controller('/hello')
export class FirstSoluceWithPeeking {
  constructor(private readonly appService: FilterService) {}

  @Post()
  getHello(@Body() body: User[], @Query('name') name: string): User[] {
    return this.appService.filterUsers(body, name);
  }
}
