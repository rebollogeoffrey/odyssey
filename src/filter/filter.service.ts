import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.model';

@Injectable()
export class FilterService {
  filterUsers(users: User[], name: string): User[] {
    return users.filter((item) => item.name === name);
  }
}
