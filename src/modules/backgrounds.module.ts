import { Module } from '@nestjs/common';
import { BackgroundService } from '@core/services/background/backgrounds.service';
import { BackgroundController } from '@UI/controller/background/backgrounds.controller';
import { BackgroundsRepository } from '@repository/backgrounds.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BackgroundController],
  providers: [BackgroundService, BackgroundsRepository],
})
export class BackgroundsModule {}
