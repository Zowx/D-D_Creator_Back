import { Module } from '@nestjs/common';
import { LanguagesService } from '@core/services/language/languages.service';
import { LanguagesController } from '@UI/controller/language/languages.controller';
import { LanguagesRepository } from '@app/repository/languages.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LanguagesController],
  providers: [LanguagesService, LanguagesRepository],
})
export class LanguagesModule {}
