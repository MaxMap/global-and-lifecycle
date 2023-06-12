import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule => OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule => OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccModule => OnModuleDestroy');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('CccModule => BeforeApplicationShutdown', signal);
  }

  onApplicationShutdown() {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('=============>', cccService.findAll());

    console.log('CccModule => OnApplicationShutdown');
  }
}
