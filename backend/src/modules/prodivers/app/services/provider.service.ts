import { Injectable } from '@nestjs/common';
import Service from 'src/global/service/base.service';
import ProviderRepository from '../../domain/repositories/provider.repository';
import ProviderEntity from '../../domain/entity/provider.entity';
import { ApiError } from 'src/global/utils/exceptions/apiError';
import CreateProviderModel from '../../web/models/provider-create.model';
import { ProviderExistsError } from '../exceptions/main';
import AuthService from 'src/modules/auth/app/services/auth.service';

@Injectable()
export default class ProviderService extends Service<ProviderEntity> {
  constructor(
    private providerRepository: ProviderRepository,
    private authService: AuthService,
  ) {
    super(providerRepository);
  }

  async create(data: CreateProviderModel): Promise<ProviderEntity> {
    try {
      const name: string = data.name;
      const taxId: string = data.taxNumberId;
      const existsProvider: ProviderEntity =
        await this.providerRepository.findByTinOrName(name, taxId);
      if (existsProvider) {
        throw new ProviderExistsError();
      }
      const entity: ProviderEntity = new ProviderEntity();

      entity.country = data.country;
      entity.name = name;
      entity.taxNumberId = taxId;

      if (data.phone) {
        entity.phone = data.phone;
      }

      if (data.email) {
        entity.email = data.email;
      }

      if (data.website) {
        entity.website = data.website;
      }

      const provider: ProviderEntity = await this.repo.create(entity);
      return provider;
    } catch (e) {
      ApiError.exec(e);
    }
  }
}
