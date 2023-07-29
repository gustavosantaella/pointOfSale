import { Module } from '@nestjs/common';
import UserRepository from './domain/repositories/user.repository';
import UserService from './services/user.service';
import { userSchema } from './domain/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: userSchema,
      },
    ]),
  ],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export default class UserModule {}
