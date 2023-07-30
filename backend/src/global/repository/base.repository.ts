import { Model, Types, UpdateWriteOpResult } from 'mongoose';
import RepositoryI from '../interfaces/repository.interface';

export default class Repository implements RepositoryI {
  public model: Model<any>;
  constructor(model: Model<any>) {
    this.model = model;
  }

  public async findByPk<T>(pk: string): Promise<T> {
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

  public async create<T>(data: T): Promise<T> {
    return await this.model.create(data);
  }
}
