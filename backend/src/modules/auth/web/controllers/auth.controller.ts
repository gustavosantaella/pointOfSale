import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import AuthService from '../../services/auth.service';
import { REQUEST } from '@nestjs/core';
import { Request, Response } from 'express';
import { response } from 'src/global/utils/fn';

@Controller('auth')
export default class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  @Post('/register')
  async register(
    @Body() body: Record<string, string>,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    try {
      const data: boolean = await this.authService.register(body);
      response(res, { jeje: 2 });
    } catch (e) {
      response(res, e);
    }
  }
}
