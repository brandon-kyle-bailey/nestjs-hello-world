import { Module } from '@nestjs/common';
import { PingController } from './controller/ping.controller';
import { PingService } from './service/ping.service';

@Module({
  controllers: [PingController],
  providers: [PingService],
})
export class PingModule {}
