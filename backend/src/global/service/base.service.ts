import { Injectable } from '@nestjs/common';
import RepositoryI from '../interfaces/repository.interface';

@Injectable()
export default class Service {
  public repo: RepositoryI;
  constructor(repo: RepositoryI) {
    this.repo = repo;
  }

  async findByPk<T>(pk: string): Promise<T> {
    return this.repo.findByPk(pk);
  }
}
