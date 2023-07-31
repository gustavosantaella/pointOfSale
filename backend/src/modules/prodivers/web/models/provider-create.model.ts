import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class CreateProviderModel {
  _id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  taxNumberId: string;
  @IsString()
  @IsOptional()
  email?: string;
  @IsString()
  @IsOptional()
  phone?: string;
  @IsString()
  @IsOptional()
  website?: string;
  @IsString()
  @IsNotEmpty()
  country: string;
}
