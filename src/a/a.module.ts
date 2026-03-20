import { Module } from '@nestjs/common';
import { AService } from './a.service';
import { AController } from './a.controller';

@Module({
  controllers: [AController],
  providers: [AService],
})
export class AModule {}
