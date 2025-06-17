import { Module } from '@nestjs/common';
import { TraitsService } from '@core/services/trait/traits.service';
import { TraitsController } from '@UI/controller/trait/traits.controller';
import { TraitsRepository } from '@app/repository/traits.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TraitsController],
  providers: [TraitsService, TraitsRepository],
})
export class TraitsModule {}
