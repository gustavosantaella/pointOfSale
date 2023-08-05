import { Connection, Model, Types, UpdateWriteOpResult } from 'mongoose';
import RepositoryI from '../interfaces/repository.interface';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

export default class Repository<T> {
  protected model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }

  public async findByPk(pk: string): Promise<T> {
    return await this.model.findOne({
      _id: new Types.ObjectId(pk),
    });
  }

  public async deleteByPk(pk: string): Promise<void> {
    try {
      await this.model.deleteOne({
        _id: new Types.ObjectId(pk),
      });
    } catch (e) {
      throw e;
    }
  }

  public async updateByPk(
    pk: string,
    update: Record<any, any>,
    options: Record<any, any>,
  ): Promise<UpdateWriteOpResult> {
    try {
      return await this.model.updateOne(
        {
          _id: new Types.ObjectId(pk),
        },
        update,
        options,
      );
    } catch (e) {
      throw e;
    }
  }

  public async create(data: object): Promise<T> {
    return await this.model.create(data);
  }

  public async findOneByName(name: string): Promise<T> {
    return this.model.findOne({
      name: name,
    });
  }
}
