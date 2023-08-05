export class NewCompanyDTO {
  name: string;
  owner: string;

  constructor(userId: string, name: string) {
    this.name = name;
    this.owner = userId;
  }
}
