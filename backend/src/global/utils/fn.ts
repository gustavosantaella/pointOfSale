import { Response } from 'express';
import { ApiError } from './exceptions/apiError';
import { Logger } from '@nestjs/common';

const statusCodeErrors: Array<number> = [400, 401, 500, 501, 404, 403];

export const response = <T>(
  res: Response,
  data: Record<any, any> | Array<T> | ApiError | T = {},
  status: number = 200,
): void => {
  let dataResponse: Record<any, any> = {};
  dataResponse.data = data;
  if (data instanceof ApiError) {
    const error: ApiError = data as ApiError;
    status = error.errorCode;
    dataResponse.message = error.message;
    Logger.error(error, 'Http Response [API ERROR]');
    delete dataResponse.data;
  } else if (data instanceof Error) {
    const error: Error = data as Error;
    status = 404;
    dataResponse.message = error.message;
    Logger.error(error, 'Http Response [ERROR]');
    delete dataResponse.data;
  }
  dataResponse = {
    status:
      statusCodeErrors.includes(status) == true
        ? statusCodeErrors.filter((code: number) => code == status)[0]
        : status,
    ok:
      statusCodeErrors.includes(status) == true || data instanceof ApiError
        ? 'error'
        : 'ok',
    ...dataResponse,
  };
  res.status(status);
  res.json(dataResponse);
};
