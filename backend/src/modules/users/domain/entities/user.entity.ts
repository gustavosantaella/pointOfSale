import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as Sc } from 'mongoose';

@Schema({ timestamps: true })
export default class UserEntity {
  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ virtual: true, required: true, unique: false, type: String })
  password: string;

  @Prop({ required: true, unique: false, type: String })
  country: string;
}

export const userSchema: Sc<UserEntity> =
  SchemaFactory.createForClass(UserEntity);
