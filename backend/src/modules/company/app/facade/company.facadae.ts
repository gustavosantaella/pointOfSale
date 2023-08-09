import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Facade } from 'src/global/facades/base.facade';
import { CompanyEntity } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { NewCompanyDTO } from '../dto/NewCompany.dto';

@Injectable()
export class CompanyFacade extends Facade<CompanyEntity> {
  constructor(protected repository: CompanyRepository) {
    super(repository);
  }

  async createWithOwner(data: NewCompanyDTO): Promise<NewCompanyDTO> {
    const entity: CompanyEntity = new CompanyEntity();
    entity.name = data.name;
    entity.ownerId = new Types.ObjectId(data.owner);
    await this.repository.create(entity);
    return data;
  }
}
