import { Global, Module } from '@nestjs/common';
import AuthService from './app/services/auth.service';
import AuthController from './web/controllers/auth.controller';
import UserModule from '../users/user.module';
import { JwtService } from '@nestjs/jwt';

@Global()
@Module({
  imports: [UserModule],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService, UserModule],
})
export default class AuthModule {}
