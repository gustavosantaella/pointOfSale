import { IsString } from 'class-validator';

export class NewCompanyModel {
  @IsString()
  name: string;
}
