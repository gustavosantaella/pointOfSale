import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Repository from 'src/global/repository/base.repository';

@Injectable()
export default class ProviderRepository extends Repository {
  constructor(@InjectModel('providers') repo: Model<any>) {
    super(repo);
  }
}
