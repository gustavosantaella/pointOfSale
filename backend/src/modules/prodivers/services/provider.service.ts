import { Injectable } from '@nestjs/common';
import Service from 'src/global/service/base.service';
import ProviderRepository from '../domain/repositories/provider.repository';
import ProviderEntity from '../domain/entity/provider.entity';
import { ApiError } from 'src/global/utils/exceptions/apiError';

@Injectable()
export default class ProviderService extends Service {
  constructor(repo: ProviderRepository) {
    super(repo);
  }

  async create(data: Record<any, any>): Promise<ProviderEntity> {
    try {
      const entity: ProviderEntity = new ProviderEntity();
      entity.country = data.country;
      entity.name = data.name;
      entity.taxNumberId = data.taxNumberId;
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
    } catch (e: any) {
      throw new ApiError(e.message);
    }
  }
}
