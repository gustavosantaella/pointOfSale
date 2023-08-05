import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as Sc } from 'mongoose';

@Schema({ timestamps: true })
export default class UserEntity {
  @Prop({
    required: true,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    virtual: true,
    required: true,
    unique: false,
    type: String,
    trim: true,
  })
  password: string;

  @Prop({
    required: true,
    unique: false,
    type: String,
    uppercase: true,
    trim: true,
  })
  country: string;
}

export const userSchema: Sc<UserEntity> =
  SchemaFactory.createForClass(UserEntity);
