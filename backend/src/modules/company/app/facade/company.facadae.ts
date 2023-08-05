import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Facade } from 'src/global/facades/base.facade';

@Injectable()
export class CompanyFacade<T> extends Facade<T> {
  constructor(private repo: Model<T>) {
    super(repo);
  }
}
