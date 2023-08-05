import Repository from 'src/global/repository/base.repository';
import { CompanyEntity } from '../entities/company.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyRepository extends Repository<CompanyEntity> {
  constructor(@InjectModel('companies') repo: Model<CompanyEntity>) {
    super(repo);
  }

  async findByname(name: string): Promise<CompanyEntity> {
    return this.model.findOne({
      name: name.toUpperCase(),
    });
  }
}
