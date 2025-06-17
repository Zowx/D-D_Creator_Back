import { ImportService } from '@core/services/import/import.service';
import { ImportConnector } from '@ext.api/connector/import.connector';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ImportController } from '@UI/controller/import/import.controller';
import { LanguagesRepository, AlignmentsRepository, AbilitiesRepository, SkillRepository, BackgroundsRepository } from '@repository/repository';
import { ClassesRepository } from '@app/repository/classes.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [ImportController],
    providers: [
        ImportService,
        ImportConnector,
        AbilitiesRepository,
        AlignmentsRepository,
        LanguagesRepository,
        SkillRepository,
        BackgroundsRepository,
        ClassesRepository,
    ],
})
export class ImportModule { }
