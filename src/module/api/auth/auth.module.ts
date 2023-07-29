import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guard/auth.guard';
@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthGuard, AuthService, ConfigService, JwtService],
  exports: [AuthGuard, JwtService],
})
export class AuthModule {}
