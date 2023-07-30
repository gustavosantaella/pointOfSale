import { Module } from '@nestjs/common';
import AuthModule from './auth/auth.module';
import ProvviderModule from './prodivers/provider.module';

@Module({
  imports: [AuthModule, ProvviderModule],
})
export default class SourceModule {}
