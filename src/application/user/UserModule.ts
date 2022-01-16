import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//Domain
import { UsersService } from './UsersService';
import { UsersController } from './UsersController';
//Entity
import { User } from './User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserModule {}