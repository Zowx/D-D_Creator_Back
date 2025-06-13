import { Module } from '@nestjs/common';
import { ImportConnector } from './connector/import.connector';

@Module({
  providers: [ImportConnector],
  exports: [ImportConnector],
})
export class ExtApiModule {}
