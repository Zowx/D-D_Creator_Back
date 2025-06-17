import { Module } from '@nestjs/common';
import { ClassesService } from '@core/services/class/classes.service';
import { ClassesController } from '@UI/controller/class/classes.controller';
import { ClassesRepository } from '@app/repository/classes.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassesController],
  providers: [ClassesService, ClassesRepository],
})
export class ClassesModule {}
