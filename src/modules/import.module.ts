import { ImportService } from '@core/services/import/import.service';
import { ImportConnector } from '@ext.api/connector/import.connector';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ImportController } from '@UI/controller/import/import.controller';
import { AbilitiesRepository } from '@repository/abilities.repository';
import { AlignmentsRepository } from '@app/repository/alignments.repository';
import { RacesRepository } from '@repository/repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ImportController],
  providers: [
    ImportService,
    ImportConnector,
    AbilitiesRepository,
    AlignmentsRepository,
    RacesRepository,
  ],
})
export class ImportModule {}
