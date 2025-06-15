import { Module } from '@nestjs/common';
import { LanguagesService } from '@core/services/language/languages.service';
import { LanguagesController } from '@UI/controller/language/languages.controller';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService],
})
export class LanguagesModule {}
