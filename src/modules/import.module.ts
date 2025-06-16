import { ImportService } from '@core/services/import/import.service';
import { ImportConnector } from '@ext.api/connector/import.connector';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ImportController } from '@UI/controller/import/import.controller';
import { TestImportController } from '@UI/controller/test-import/test-import.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ImportController, TestImportController],
  providers: [ImportService, ImportConnector],
})
export class ImportModule {}
