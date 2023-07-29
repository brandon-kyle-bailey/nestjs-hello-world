export interface GetSslCertificateResponseDto {
  country: string;
  organization: string;
  subject: string;
  issuer: string;
  validFrom: string;
  validTo: string;
  subjectAltName: string;
}
