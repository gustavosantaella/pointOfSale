import { Model } from 'mongoose';
import Repository from '../repository/base.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Facade<G> {
  protected repository: Repository<G>;
  constructor(repository: Repository<G>) {
    this.repository = repository;
  }
  async findByName(name: string): Promise<G> {
    return this.repository.findOneByName(name);
  }

  async create(data: object): Promise<G> {
    return await this.repository.create(data as any);
  }
  async findOneByNameField(name: string): Promise<G> {
    return await this.repository.findOneByName(name);
  }
}
