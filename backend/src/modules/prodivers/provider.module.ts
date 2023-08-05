import { Module } from '@nestjs/common';
import ProviderService from './app/services/provider.service';
import ProviderRepository from './domain/repositories/provider.repository';
import ProviderController from './web/controllers/provider.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { providerSchema } from './domain/entity/provider.entity';
import AuthModule from '../auth/auth.module';
import { ProviderFacade } from './facades/provider.facade';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: 'providers',
        schema: providerSchema,
      },
    ]),
  ],
  providers: [ProviderService, ProviderRepository, ProviderFacade],
  controllers: [ProviderController],
})
export default class ProviderModule {}
