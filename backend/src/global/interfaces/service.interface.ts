export default interface ServiceI<T> {
  findByPk(pk: string): Promise<T>;
}
