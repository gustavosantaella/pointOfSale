import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from '../entities/company.entity';
import { CompanyRepository } from './company.repository';
@Module({
  providers: [CompanyRepository],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'companies',
        schema: CompanySchema,
      },
    ]),
  ],
  exports: [CompanyRepository],
})
export class CompnayRepositoryModule {}
