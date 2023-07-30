import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as Sc } from 'mongoose';

// TODO: create sales contact entity

@Schema({ timestamps: true })
export default class ProviderEntity {
  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  taxNumberId: string;

  @Prop({ required: false, unique: true, type: String })
  email: string;

  @Prop({ required: false, unique: true, type: String })
  phone: string;

  @Prop({ required: false, unique: true, type: String })
  country: string;

  @Prop({ required: false, unique: true, type: String })
  website: string;
}

export const providerSchema: Sc<ProviderEntity> =
  SchemaFactory.createForClass(ProviderEntity);
