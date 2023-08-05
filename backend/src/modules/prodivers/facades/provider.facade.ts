import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Facade } from 'src/global/facades/base.facade';
import Repository from 'src/global/repository/base.repository';

@Injectable()
export class ProviderFacade<T> extends Facade<T> {
  async findByTinOrName(name: string, tin: string): Promise<any> {
    return null;
  }
}
