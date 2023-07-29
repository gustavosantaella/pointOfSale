import { Global, Injectable } from '@nestjs/common';
import { ConfigService as ConfigServicePackage } from '@nestjs/config';

@Injectable()
@Global()
export default class EnvironmentService {
  constructor(private config: ConfigServicePackage) {
    console.log('Env loading');
    const envWorking: string = config.get('WORKING');
    console.log('Env loaded', envWorking);
  }

  public get(key: string): string {
    key = key.trim();
    const value: string = this.config.get(key.toUpperCase());
    return value;
  }
}
