import { Module } from '@nestjs/common';
import { AbilitiesService } from '@core/services/ability/abilities.service';
import { AbilitiesController } from '@UI/controller/ability/abilities.controller';

@Module({
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
})
export class AbilitiesModule {}
