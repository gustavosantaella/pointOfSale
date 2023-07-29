import { Module } from '@nestjs/common';
import EnvModule from './global/config/environment.module';
import DatabaseModule from './global/config/database/database.module';
import SourceModule from './modules/source.module';

@Module({
  imports: [EnvModule, DatabaseModule, SourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
