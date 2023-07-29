import { HttpStatus } from '@nestjs/common';
import { ApiError } from 'src/global/utils/exceptions/apiError';

export class UserEmailNotFound extends ApiError {
  constructor(email: string) {
    super(`email *(${email}) not found `, HttpStatus.NOT_FOUND);
  }
}
