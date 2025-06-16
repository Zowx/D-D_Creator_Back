import { ImportService } from '@core/services/import/import.service';
import { ImportConnector } from '@ext.api/connector/import.connector';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ImportController } from '@UI/controller/import/import.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ImportController],
  providers: [ImportService, ImportConnector],
})
export class ImportModule {}
