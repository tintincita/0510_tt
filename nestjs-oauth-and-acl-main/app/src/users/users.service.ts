import { Injectable } from '@nestjs/common';
import { Role } from 'src/models/enums/role.enum';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // define class on its own file
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.ROLE_USER],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.ROLE_USER],
    },
    {
      userId: 3,
      username: 'gaia',
      password: 'tree',
      roles: [Role.ROLE_USER, Role.ROLE_ADMIN],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
