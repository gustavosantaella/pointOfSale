import { Module } from '@nestjs/common';
import { CompnayRepositoryModule } from './domain/repositories/repository.module';
import { CompanyService } from './app/services/company.service';

@Module({
  imports: [CompnayRepositoryModule],
  providers: [CompanyService],
})
export class CompanyModule {}
