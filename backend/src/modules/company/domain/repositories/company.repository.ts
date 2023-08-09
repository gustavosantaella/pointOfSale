import Repository from 'src/global/repository/base.repository';
import { CompanyEntity } from '../entities/company.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyRepository extends Repository<CompanyEntity> {
  constructor(@InjectModel('companies') model: Model<CompanyEntity>) {
    super(model);
  }

  async findByOwner(ownerId: string): Promise<CompanyEntity> {
    return await this.model.findOne({
      ownerId: ownerId,
    });
  }

  async findByname(name: string): Promise<CompanyEntity> {
    return this.model.findOne({
      name: name.toUpperCase(),
    });
  }
}
