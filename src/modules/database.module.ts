import { Module } from '@nestjs/common';
import { DatabaseService } from '@repository/database.service';
import {
  AbilitiesRepository,
  AlignmentsRepository,
  ClassesRepository,
  RacesRepository,
} from '@repository/repository';

@Module({
  providers: [
    DatabaseService,
    AbilitiesRepository,
    AlignmentsRepository,
    ClassesRepository,
    RacesRepository,
  ],
  exports: [
    DatabaseService,
    AbilitiesRepository,
    AlignmentsRepository,
    ClassesRepository,
    RacesRepository,
  ],
})
export class DatabaseModule {}
