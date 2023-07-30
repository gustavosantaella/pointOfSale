import { Module } from '@nestjs/common';
import ProviderService from './services/provider.service';
import ProviderRepository from './domain/repositories/provider.repository';
import ProviderController from './web/controllers/provider.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { providerSchema } from './domain/entity/provider.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'providers',
        schema: providerSchema,
      },
    ]),
  ],
  providers: [ProviderService, ProviderRepository],
  controllers: [ProviderController],
})
export default class ProvviderModule {}
