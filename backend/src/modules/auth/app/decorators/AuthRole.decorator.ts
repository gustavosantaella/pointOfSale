import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import {
  applyDecorators,
  UseGuards,
  SetMetadata,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import AuthService from '../services/auth.service';

@Injectable()
class ApiGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token: string | null = request.headers.authorization;
    if (!token) {
      return false;
    }
    const user: any = await this.authService.verifyToken(token);
    if (user == false) {
      return false;
    }
    this.authService.setUserAuthenticated = user;
    return true;
  }
}

export const AuthRoles = (...roles: string[]): any => {
  return applyDecorators(UseGuards(ApiGuard), SetMetadata('roles', roles));
};
export default AuthRoles;
