export class ApiError extends Error {
  public errorCode: number;
  constructor(message: string, code: number = 400) {
    super(message);
    this.message = message;
    this.errorCode = code;
  }
}
