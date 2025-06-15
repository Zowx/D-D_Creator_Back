import { Module } from '@nestjs/common';
import { BackgroundsService } from '@core/services/background/backgrounds.service';
import { BackgroundsController } from '@UI/controller/background/backgrounds.controller';

@Module({
  controllers: [BackgroundsController],
  providers: [BackgroundsService],
})
export class BackgroundsModule {}
