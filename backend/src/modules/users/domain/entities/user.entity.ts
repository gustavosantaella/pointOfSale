import { Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export default class UserEntity {
  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ virtual: true, required: true, unique: false, type: String })
  password: string;

  @Prop({ required: true, unique: false, type: String })
  country: string;
}
