import { Module } from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service'
import { RacesController } from '@UI/controller/race/races.controller';
import { DatabaseModule } from './database.module';
import { RacesRepository } from '@app/repository/repository';

@Module({
  imports: [DatabaseModule],
  controllers: [RacesController],
  providers: [RacesService, RacesRepository],
})
export class RacesModule {}
