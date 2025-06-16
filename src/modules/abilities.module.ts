import { Module } from '@nestjs/common';
import { AbilitiesService } from '@core/services/ability/abilities.service';
import { AbilitiesController } from '@UI/controller/ability/abilities.controller';
import { AbilitiesRepository } from '@repository/abilities.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AbilitiesController],
  providers: [AbilitiesService, AbilitiesRepository],
})
export class AbilitiesModule {}
