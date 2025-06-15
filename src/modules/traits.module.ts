import { Module } from '@nestjs/common';
import { TraitsService } from '@core/services/trait/traits.service';
import { TraitsController } from '@UI/controller/trait/traits.controller';

@Module({
  controllers: [TraitsController],
  providers: [TraitsService],
})
export class TraitsModule {}
