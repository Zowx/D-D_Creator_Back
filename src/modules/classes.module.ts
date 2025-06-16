import { Module } from '@nestjs/common';
import { ClassesService } from '@core/services/class/classes.service';
import { ClassesController } from '@UI/controller/class/classes.controller';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
