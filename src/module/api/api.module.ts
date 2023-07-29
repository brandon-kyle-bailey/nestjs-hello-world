import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PingModule } from './ping/ping.module';
import { UserModule } from './user/user.module';
import { SslModule } from './ssl/ssl.module';

@Module({
  imports: [AuthModule, PingModule, UserModule, SslModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
