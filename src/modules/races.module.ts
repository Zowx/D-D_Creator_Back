import { Module } from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service'
import { RacesController } from '@UI/controller/race/races.controller';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RacesController],
  providers: [RacesService, RacesRepository],
})
export class RacesModule {}
