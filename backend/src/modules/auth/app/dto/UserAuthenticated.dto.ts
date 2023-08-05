export default class UserAuthenticatedDTO {
  constructor(
    public _id: string,
    public email: string,
    public password: string,
    public country: string,
    public createdAt: string,
    public updatedAt: string,
  ) {
    return;
  }
}
