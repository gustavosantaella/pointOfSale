import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Repository from 'src/global/repository/base.repository';
import ProviderEntity from '../entity/provider.entity';

@Injectable()
export default class ProviderRepository extends Repository<ProviderEntity> {
  constructor(@InjectModel('providers') repo: Model<any>) {
    super(repo);
  }

  async findByTinOrName(name: string, tin: string): Promise<ProviderEntity> {
    const [data]: ProviderEntity[] = await this.model.aggregate([
      {
        $match: {
          $or: [
            {
              name: name.toUpperCase(),
            },
            {
              taxNumberId: tin.toUpperCase(),
            },
          ],
        },
      },
    ]);
    return data;
  }
}
