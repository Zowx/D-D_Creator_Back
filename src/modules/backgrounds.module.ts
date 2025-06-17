import { Module } from '@nestjs/common';
import { BackgroundService } from '@core/services/background/backgrounds.service';
import { BackgroundController } from '@UI/controller/background/backgrounds.controller';

@Module({
  controllers: [BackgroundController],
  providers: [BackgroundService],
})
export class BackgroundsModule {}
