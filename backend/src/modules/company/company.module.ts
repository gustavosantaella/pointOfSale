import { Module } from '@nestjs/common';
import { CompnayRepositoryModule } from './domain/repositories/repository.module';
import { CompanyService } from './app/services/company.service';
import { CompanyFacade } from './app/facade/company.facadae';
import { CompanyController } from './web/controllers/company.controller';

@Module({
  imports: [CompnayRepositoryModule],
  providers: [CompanyService, CompanyFacade],
  controllers: [CompanyController],
})
export class CompanyModule {}
