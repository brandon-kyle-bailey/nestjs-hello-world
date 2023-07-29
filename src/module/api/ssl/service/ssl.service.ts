import { Injectable } from '@nestjs/common';
import { GetSslCertificateResponseDto } from '../dto/get-ssl-certificate.response.dto';
import { GetSslCertificateRequestDto } from '../dto/get-ssl-certificate.request.dto';
import * as https from 'https';
import { TLSSocket } from 'tls';

const getCert = (socket: any) => {
  console.log('getting the certificate', socket.getPeerCertificate());
  const { subject, issuer, valid_from, valid_to, subjectaltname } =
    socket.getPeerCertificate() || {};
  return {
    country: issuer ? issuer.C || '' : '',
    organization: issuer ? issuer.O || '' : '',
    subject: subject ? subject.CN || '' : '',
    issuer: issuer ? issuer.CN || '' : '',
    validFrom: valid_from ? new Date(valid_from).toISOString() : '',
    validTo: valid_to ? new Date(valid_to).toISOString() : '',
    subjectAltName: Array.isArray(subjectaltname)
      ? subjectaltname.join(', ')
      : subjectaltname,
  };
};

@Injectable()
export class SslService {
  constructor() {}

  async getCertificate(
    req: GetSslCertificateRequestDto,
  ): Promise<GetSslCertificateResponseDto> {
    return await new Promise((resolve, reject) => {
      https
        .get({ host: req.url, port: 443 }, (res) => {
          const tlsSocket = res.socket as TLSSocket;
          const certificate = getCert(tlsSocket);
          if (certificate) {
            resolve(certificate);
          } else {
            reject(
              new Error('Unable to retrieve SSL certificate information.'),
            );
          }
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
