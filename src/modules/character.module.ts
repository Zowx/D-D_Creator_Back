import { Character } from '@core/models/character.model';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CharactersController } from '@app/UI/controller/character/character.controller';
import { CharactersService } from '@app/core/services/character/character.service';
import { CharactersRepository } from '@app/repository/character.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersRepository],
})
export class CharactersModule { }
