import { Module } from '@nestjs/common';
import { AlignmentsService } from './alignments.service';
import { AlignmentsController } from './alignments.controller';

@Module({
  controllers: [AlignmentsController],
  providers: [AlignmentsService],
})
export class AlignmentsModule {}
