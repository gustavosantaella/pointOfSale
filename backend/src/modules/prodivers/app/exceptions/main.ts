import { HttpStatus } from '@nestjs/common';
import { ApiError } from 'src/global/utils/exceptions/apiError';

export class ProviderExistsError extends ApiError {
  constructor() {
    super('Provider already exsits', HttpStatus.BAD_REQUEST);
  }
}
