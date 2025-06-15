import { Module } from '@nestjs/common';
import { AlignmentsService } from '@core/services/alignment/alignments.service';
import { AlignmentsController } from '@UI/controller/alignment/alignments.controller';

@Module({
  controllers: [AlignmentsController],
  providers: [AlignmentsService],
})
export class AlignmentsModule {}
