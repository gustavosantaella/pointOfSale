import { Module } from '@nestjs/common';
import AuthModule from './auth/auth.module';
import ProviderModule from './prodivers/provider.module';

@Module({
  imports: [AuthModule, ProviderModule],
})
export default class SourceModule {}
