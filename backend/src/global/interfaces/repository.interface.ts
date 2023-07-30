export default interface RepositoryI {
  findByPk<T>(pk: string): Promise<T>;
  create<T>(data: T): Promise<T>;
}
