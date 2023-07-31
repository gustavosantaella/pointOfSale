import { HttpStatus } from '@nestjs/common';

export class ApiError extends Error {
  public errorCode: number;
  constructor(message: string, code: number = 400) {
    super(message);
    this.message = message;
    this.errorCode = code;
  }

  static exec(e: unknown, code: number = 400): void {
    if (e instanceof Error) {
      throw new this(e.message, code);
    }
  }
}

export class ResourceNotFound extends ApiError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}
