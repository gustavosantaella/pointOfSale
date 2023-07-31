import { Injectable } from '@nestjs/common';
import RepositoryI from '../interfaces/repository.interface';

@Injectable()
export default class Service<T> {
  public repo: RepositoryI<T>;
  constructor(repo: RepositoryI<T>) {
    this.repo = repo;
  }
}
