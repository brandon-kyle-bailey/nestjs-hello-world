import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

export interface IUser {
  id: string;
  emailAddress: string;
  password: string;
}

@Injectable()
export class UserService {
  private readonly users: IUser[] = [
    {
      id: v4(),
      emailAddress: 'john@gmail.com',
      password: '$2b$10$Ap452K2afcJmSmxd3J2GpeXY.Gs2sNTh3C5423Wc2vvNy6bBSM7hq',
    },
    {
      id: v4(),
      emailAddress: 'maria@gmail.com',
      password: '$2b$10$Ap452K2afcJmSmxd3J2GpeXY.Gs2sNTh3C5423Wc2vvNy6bBSM7hq',
    },
    {
      id: v4(),
      emailAddress: 'brandonkylebailey@gmail.com',
      password: '$2b$10$Ap452K2afcJmSmxd3J2GpeXY.Gs2sNTh3C5423Wc2vvNy6bBSM7hq',
    },
  ];

  async findOne(emailAddress: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.emailAddress === emailAddress);
  }
}
