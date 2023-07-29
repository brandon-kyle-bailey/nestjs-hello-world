import { Injectable } from '@nestjs/common';
import { PingResponseDto } from '../dto/ping.response.dto';

@Injectable()
export class PingService {
  ping(): PingResponseDto {
    return { response: 'pong' };
  }
}
