import { Injectable } from '@nestjs/common';
import RepositoryI from '../interfaces/repository.interface';
import { Facade } from '../facades/base.facade';

@Injectable()
export default class Service<T> {
  public facade: Facade<T>;
  constructor(facade: Facade<T>) {
    this.facade = facade;
  }
}
