import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Facade } from 'src/global/facades/base.facade';
import Repository from 'src/global/repository/base.repository';
import { CompanyEntity } from 'src/modules/company/domain/entities/company.entity';
import ProviderRepository from '../domain/repositories/provider.repository';
import ProviderEntity from '../domain/entity/provider.entity';

@Injectable()
export class ProviderFacade extends Facade<ProviderEntity> {
  constructor(private repo: ProviderRepository) {
    super(repo);
  }
  async findByTinOrName(name: string, tin: string): Promise<any> {
    return await this.repo.findByTinOrName(name, tin);
  }
}
