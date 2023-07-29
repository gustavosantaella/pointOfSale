import { HttpStatus } from '@nestjs/common';
import { ApiError } from 'src/global/utils/exceptions/apiError';

export class NotAuthorized extends ApiError {
  constructor(message?: string) {
    super("You don't have permissions to do that", HttpStatus.FORBIDDEN);
  }
}
