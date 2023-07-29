import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ConfigService from '../environment.service';
import EnvModule from '../environment.module';
import EnvironmentService from '../environment.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvModule],
      useFactory: async (env: EnvironmentService) => {
        const uri: string = env.get('MONGO_URL');
        return {
          uri,
        };
      },
      inject: [EnvironmentService],
    }),
  ],
})
export default class DatabaseModule {}
