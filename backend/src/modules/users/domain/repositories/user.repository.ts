import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserEntity from '../entities/user.entity';
import Repository from 'src/global/repository/base.repository';

@Injectable()
export default class UserRepository extends Repository {
  constructor(@InjectModel('users') model: Model<UserEntity>) {
    super(model);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.model.findOne({
      email,
    });
  }
}
