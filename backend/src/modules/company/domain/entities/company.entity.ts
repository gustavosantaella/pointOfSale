import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as Sc, Types } from 'mongoose';

@Schema({ timestamps: true })
export class CompanyEntity {
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
    unique: false,
    type: Types.ObjectId,
    uppercase: true,
    trim: true,
  })
  ownerId: Types.ObjectId;

  @Prop({
    required: false,
    unique: true,
    type: String,
    uppercase: true,
    trim: true,
    default: null,
  })
  taxNumberId: string;

  @Prop({
    required: false,
    default: {},
    type: Object,
  })
  settings: CompanySettings;
}

export class CompanySettings {
  @Prop({
    required: false,
    unique: false,
    type: Object,
    uppercase: true,
    trim: true,
    default: {},
  })
  location: CompanyLocation;

  @Prop({
    required: false,
    unique: false,
    type: Object,
    uppercase: true,
    trim: true,
    default: {},
  })
  contact: CompanyContact;
}

export class CompanyLocation {
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
    unique: false,
    type: String,
    uppercase: true,
    trim: true,
    default: null,
  })
  latitude: string;
  @Prop({
    required: false,
    unique: false,
    type: String,
    uppercase: true,
    trim: true,
    default: null,
  })
  longitude: string;
}

export class CompanyContact {
  @Prop({
    required: false,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
    default: null,
  })
  email?: string;

  @Prop({
    required: true,
    unique: false,
    type: String,
    trim: true,
    default: null,
  })
  phone?: string;

  @Prop({
    default: null,
    required: false,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
  })
  website?: string;
}

export const CompanySchema: Sc<CompanyEntity> =
  SchemaFactory.createForClass(CompanyEntity);
