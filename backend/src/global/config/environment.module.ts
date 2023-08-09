import { Global, Module } from '@nestjs/common';
import { ConfigModule as ConfigModulePackage } from '@nestjs/config';
import EnvironmentService from './environment.service';

const envFilePath = (file: string): string => './envs/' + file;
@Global()
@Module({
  imports: [
    ConfigModulePackage.forRoot({
      envFilePath: [
        '.env',
        envFilePath('.env.local'),
        envFilePath('.env.prod'),
        envFilePath('.env.dev'),
      ],
    }),
  ],
  providers: [EnvironmentService],
  exports: [EnvironmentService],
})
export default class EnvModule {}
