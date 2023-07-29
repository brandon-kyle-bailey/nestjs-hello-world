import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './module/api/api.module';
import { PingModule } from './module/api/ping/ping.module';
import { AuthModule } from './module/api/auth/auth.module';
import { UserModule } from './module/api/user/user.module';
import { RouterModule } from '@nestjs/core';
import { SslModule } from './module/api/ssl/ssl.module';

const imports = [ApiModule, PingModule, AuthModule, UserModule, SslModule];

const apiRoutes = [
  {
    path: 'api',
    module: ApiModule,
    children: [
      { path: 'v1', module: PingModule },
      { path: 'v1', module: AuthModule },
      { path: 'v1', module: SslModule },
    ],
  },
];
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...imports,
    RouterModule.register(apiRoutes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
