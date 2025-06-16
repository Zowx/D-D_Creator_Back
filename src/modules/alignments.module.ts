import { Module } from '@nestjs/common';
import { AlignmentsService } from '@core/services/alignment/alignments.service';
import { AlignmentsController } from '@UI/controller/alignment/alignments.controller';
import { AlignmentsRepository } from '@app/repository/alignments.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AlignmentsController],
  providers: [AlignmentsService, AlignmentsRepository],
})
export class AlignmentsModule {}
