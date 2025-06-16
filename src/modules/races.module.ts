import { Module } from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service'
import { RacesController } from '@UI/controller/race/races.controller';
import { RacesRepository } from '@repository/repository';
import { DatabaseService } from '@repository/database.service';

@Module({
  controllers: [RacesController],
  providers: [RacesService, RacesRepository, DatabaseService],
})
export class RacesModule {}
