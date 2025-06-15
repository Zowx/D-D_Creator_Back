import { Module } from '@nestjs/common';
import { ImportConnector } from '@ext.api/connector/import.connector';

@Module({
  providers: [ImportConnector],
  exports: [ImportConnector],
})
export class ExtApiModule {}
