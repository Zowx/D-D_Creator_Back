import { Module } from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service'
import { RacesController } from '@UI/controller/race/races.controller';

@Module({
  controllers: [RacesController],
  providers: [RacesService],
})
export class RacesModule {}
