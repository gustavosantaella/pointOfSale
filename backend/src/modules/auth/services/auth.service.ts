import { Injectable } from '@nestjs/common';
import { ApiError } from 'src/global/utils/exceptions/apiError';
import { NotAuthorized } from '../exceptions/main';

@Injectable()
export default class AuthService {
  async register(data: Record<string, string>): Promise<boolean> {
    console.log(data);
    throw new NotAuthorized('error');
  }
}
