import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { response } from 'src/global/utils/fn';
import ProviderService from '../../services/provider.service';
import CreateProviderModel from '../models/provider-create.model';
import ProviderEntity from '../../domain/entity/provider.entity';

@Controller('providers')
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
    } catch (e: any) {
      response(res, e);
    }
  }
}
