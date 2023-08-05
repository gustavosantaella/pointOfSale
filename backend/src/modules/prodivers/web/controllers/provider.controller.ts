import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { response } from 'src/global/utils/fn';
import ProviderService from '../../app/services/provider.service';
import CreateProviderModel from '../models/provider-create.model';
import ProviderEntity from '../../domain/entity/provider.entity';
import AuthRoles from 'src/modules/auth/app/decorators/AuthRole.decorator';
import UserService from 'src/modules/users/services/user.service';

@Controller('providers')
@AuthRoles('admin', 'merchant')
export default class ProviderController {
  constructor(private service: ProviderService) {}
  @Post('/new')
  async create(
    @Res() res: Response,
    @Body() payload: CreateProviderModel,
  ): Promise<void> {
    try {
      const data: ProviderEntity = await this.service.create(payload);
      response(res, data);
    } catch (e) {
      response(res, e);
    }
  }
}
