import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { PingResponseDto } from '../dto/ping.response.dto';
import { PingService } from '../service/ping.service';

@Controller('ping')
export class PingController {
  constructor(private pingService: PingService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  get(): PingResponseDto {
    return this.pingService.ping();
  }
}
