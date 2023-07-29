import { IsEmail, Min } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
export class UserLoginModel {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @Min(8)
  password: string;
}
