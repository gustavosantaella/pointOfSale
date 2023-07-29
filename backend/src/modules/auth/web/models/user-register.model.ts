import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class UserRegisterMModel {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Min(8)
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
