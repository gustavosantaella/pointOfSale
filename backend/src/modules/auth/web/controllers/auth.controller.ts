import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import AuthService from '../../app/services/auth.service';
import { REQUEST } from '@nestjs/core';
import { Request, Response } from 'express';
import { response } from 'src/global/utils/fn';
import { UserRegisterMModel } from '../models/user-register.model';
import UserEntity from 'src/modules/users/domain/entities/user.entity';
import { UserLoginModel } from '../models/user-login.model';

@Controller('auth')
export default class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  @Post('/register')
  async register(
    @Body() body: UserRegisterMModel,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    try {
      const data: UserEntity = await this.authService.register(body);
      response(res, data);
    } catch (e) {
      response(res, e);
    }
  }

  @Post('/login')
  async login(
    @Body() body: UserLoginModel,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    try {
      console.log('login method');
      const token: string = await this.authService.login(body);
      response(res, token);
    } catch (e) {
      response(res, e);
    }
  }
}
