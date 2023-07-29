import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/guard/auth.guard';
import { SslService } from '../service/ssl.service';
import { GetSslCertificateRequestDto } from '../dto/get-ssl-certificate.request.dto';
import { GetSslCertificateResponseDto } from '../dto/get-ssl-certificate.response.dto';

@Controller('ssl')
export class SslController {
  constructor(private sslService: SslService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get()
  async get(
    @Query() req: GetSslCertificateRequestDto,
  ): Promise<GetSslCertificateResponseDto> {
    return this.sslService.getCertificate(req);
  }
}
