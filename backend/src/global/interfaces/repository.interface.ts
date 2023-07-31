export default interface RepositoryI<T> {
  findByPk(pk: string): Promise<T>;
  create(data: T): Promise<T>;
}
