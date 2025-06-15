import { Module } from '@nestjs/common';
import { TraitsService } from './traits.service';
import { TraitsController } from './traits.controller';

@Module({
  controllers: [TraitsController],
  providers: [TraitsService],
})
export class TraitsModule {}
