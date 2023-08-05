import { Injectable } from '@nestjs/common/decorators/core';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { CompanyAlreadyExistsError } from '../exceptions';
import Service from 'src/global/service/base.service';
import { CompanyEntity } from '../../domain/entities/company.entity';
import AuthService from 'src/modules/auth/app/services/auth.service';
import { CompanyFacade } from '../facade/company.facadae';

@Injectable()
export class CompanyService extends Service<CompanyEntity> {
  constructor(
    facade: CompanyFacade<CompanyEntity>,
    private authService: AuthService,
  ) {
    super(facade);
  }

  async new(data: any): Promise<boolean> {
    try {
      //   const company: any = this.facade.findByname(data.name);
      //   if (company) {
      //     throw new CompanyAlreadyExistsError();
      //   }
      //   const userId: string = this.authService.user._id;
      //   this.companyRepository.create(data);

      return true;
    } catch (e) {
      throw e;
    }
  }
}
