import { Injectable, Logger } from '@nestjs/common';
import { JWTError, NotEqualPassowrds } from '../exceptions/main';
import UserService from 'src/modules/users/services/user.service';
import { UserRegisterMModel } from '../web/models/user-register.model';
import UserEntity from 'src/modules/users/domain/entities/user.entity';
import { UserLoginModel } from '../web/models/user-login.model';
import { UserEmailNotFound } from 'src/modules/users/exceptions/main';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import EnvironmentService from './../../../global/config/environment.service';

@Injectable()
export default class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
    private env: EnvironmentService,
  ) {}
  async register(data: UserRegisterMModel): Promise<UserEntity> {
    return await this.userService.register(data);
  }

  async login(data: UserLoginModel): Promise<string> {
    try {
      const user: UserEntity = await this.userService.getByEmail(data.email);
      if (!user) {
        throw new UserEmailNotFound(data.email);
      }
      const password: string = user.password;
      const equalPassword: boolean = await bcrypt.compare(
        data.password,
        password,
      );

      if (!equalPassword) {
        throw new NotEqualPassowrds();
      }
      const { password: p, ...toSign }: Record<any, any> = user;
      let token: string;
      try {
        token = await this.jwt.sign(toSign, {
          privateKey: <string>this.env.get('JWT_PRIVATE_KEY'),
        });
      } catch (e: any) {
        throw new JWTError(e);
      }
      return token;
    } catch (e: any) {
      Logger.error(e);
      throw e;
    }
  }
}
