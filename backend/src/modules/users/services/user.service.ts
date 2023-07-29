import { Injectable } from '@nestjs/common';
import UserRepository from '../domain/repositories/user.repository';
import { UserRegisterMModel } from 'src/modules/auth/web/models/user-register.model';
import { ApiError } from 'src/global/utils/exceptions/apiError';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import UserEntity from '../domain/entities/user.entity';
import { UserEmailNotFound } from '../exceptions/main';

@Injectable()
export default class UserService {
  constructor(private repository: UserRepository) {}

  async register(data: UserRegisterMModel): Promise<UserEntity> {
    try {
      data.password = await bcrypt.hash(data.password, 16);
      return await this.repository.create(data);
    } catch (e: any) {
      throw new ApiError(e.message);
    }
  }

  public async getByEmail(email: string): Promise<UserEntity | null> {
    try {
      const user: UserEntity = await this.repository.findByEmail(email);
      return user;
    } catch (e) {
      throw e;
    }
  }
}
