import { ApiError } from 'src/global/utils/exceptions/apiError';

export class CompanyAlreadyExistsError extends ApiError {
  constructor() {
    super('Company already exists', 404);
  }
}
