import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Schema as Sc } from 'mongoose';

// TODO: create sales contact entity

@Schema({ timestamps: true })
export default class ProviderEntity {
  @Prop({
    required: true,
    unique: true,
    type: String,
    uppercase: true,
    trim: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    type: String,
    uppercase: true,
    trim: true,
  })
  taxNumberId: string;

  @Prop({
    required: false,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
  })
  email?: string;

  @Prop({ required: false, unique: true, type: String, trim: true })
  phone?: string;

  @Prop({
    required: true,
    unique: false,
    type: String,
    uppercase: true,
    trim: true,
  })
  country: string;

  @Prop({
    required: false,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
  })
  website?: string;
}

export const providerSchema: Sc<ProviderEntity> =
  SchemaFactory.createForClass(ProviderEntity);
