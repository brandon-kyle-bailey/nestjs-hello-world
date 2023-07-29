import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async login(emailAddress: string, pwd: string): Promise<any> {
    const user = await this.userService.findOne(emailAddress);
    if (!user) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'User not found.',
      });
    }
    const passwordMatchesHash = await new Promise((resolve) => {
      bcrypt.compare(pwd, user.password, (err, result) => {
        resolve(result);
      });
    });

    if (!passwordMatchesHash) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Invalid credentials.',
      });
    }

    const JWT_SECRET_KEY = this.configService.get<string>('JWT_SECRET_KEY');
    if (!JWT_SECRET_KEY) {
      throw new InternalServerErrorException();
    }
    return {
      access_token: await this.jwtService.signAsync(
        {
          sub: user.id,
          email: user.emailAddress,
        },
        { secret: JWT_SECRET_KEY, expiresIn: '30m' },
      ),
    };
  }
}
