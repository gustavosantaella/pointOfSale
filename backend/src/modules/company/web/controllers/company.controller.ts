import AuthRoles from 'src/modules/auth/app/decorators/AuthRole.decorator';
import { CompanyService } from '../../app/services/company.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { response } from 'src/global/utils/fn';
import { Response } from 'express';
import { NewCompanyModel } from '../models/new-company.model';
@AuthRoles('admin', 'merchant')
@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post('/new')
  async new(
    @Body() payload: NewCompanyModel,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const data: any = await this.companyService.new(payload);

      response(res, data);
    } catch (e) {
      response(res, e);
    }
  }
}
