import { Model } from 'mongoose';
import Repository from '../repository/base.repository';

export class Facade<T> extends Repository<T> {
  async findByName(name: string): Promise<T> {
    return this.findOneByName(name) as T;
  }
}
