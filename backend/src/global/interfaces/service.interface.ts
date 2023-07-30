export default interface ServiceI {
  findByPk<T>(pk: string): Promise<T>;
}
