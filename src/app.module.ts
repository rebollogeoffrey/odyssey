import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

import {
  AppController,
  FilterName,
  FirstSoluceWithPeeking,
} from './app.controller';

import { AppService } from './app.service';
import { FilterService } from './filter/filter.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    UsersModule,
  ],
  controllers: [AppController, FilterName, FirstSoluceWithPeeking],
  providers: [AppService, FilterService],
})
export class AppModule {}
