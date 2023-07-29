import { Module } from '@nestjs/common';
import AuthService from './services/auth.service';
import AuthController from './web/controllers/auth.controller';
import UserModule from '../users/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
})
export default class AuthModule {}
