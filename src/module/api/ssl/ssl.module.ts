import { Module } from '@nestjs/common';
import { SslController } from './controller/ssl.controller';
import { SslService } from './service/ssl.service';
import { AuthModule } from '../auth/auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [SslController],
  providers: [SslService],
})
export class SslModule {}
