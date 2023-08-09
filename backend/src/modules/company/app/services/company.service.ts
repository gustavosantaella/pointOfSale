import { Injectable } from '@nestjs/common/decorators/core';
import { CompanyRepository } from '../../domain/repositories/company.repository';
import { CompanyAlreadyExistsError } from '../exceptions';
import Service from 'src/global/service/base.service';
import { CompanyEntity } from '../../domain/entities/company.entity';
import AuthService from 'src/modules/auth/app/services/auth.service';
import { CompanyFacade } from '../facade/company.facadae';
import { NewCompanyDTO } from '../dto/NewCompany.dto';
import { NewCompanyModel } from '../../web/models/new-company.model';
import { ApiError } from 'src/global/utils/exceptions/apiError';

@Injectable()
export class CompanyService extends Service<CompanyEntity> {
  constructor(
    private companyFacade: CompanyFacade,
    private authService: AuthService,
  ) {
    super(companyFacade);
  }

  async new(data: NewCompanyModel): Promise<boolean> {
    try {
      const company: any = await this.facade.findOneByNameField(data.name);
      if (company) {
        throw new CompanyAlreadyExistsError();
      }
      const userId: string = this.authService.user._id;
      const newCompanyDto: NewCompanyDTO = new NewCompanyDTO(userId, data.name);
      await this.companyFacade.createWithOwner(newCompanyDto);

      return true;
    } catch (e) {
      throw e;
    }
  }
}
