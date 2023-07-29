import { HttpStatus } from '@nestjs/common';
import { ApiError } from 'src/global/utils/exceptions/apiError';

export class NotAuthorized extends ApiError {
  constructor(message?: string) {
    super("You don't have permissions to do that", HttpStatus.FORBIDDEN);
  }
}

export class NotEqualPassowrds extends ApiError {
  constructor() {
    super('The password are differentes', HttpStatus.BAD_REQUEST);
  }
}

export class JWTError extends ApiError {
  constructor(e: Error) {
    super(e.message, HttpStatus.BAD_REQUEST);
  }
}
