import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['email', 'firstname', 'lastname'],
      where: [{ id: id }],
    });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  deleteUser(user: User): void {
    return this.usersRepository.delete(user) as unknown as void;
  }
}
