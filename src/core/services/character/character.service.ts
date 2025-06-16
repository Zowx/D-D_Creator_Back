import { Injectable, NotFoundException } from '@nestjs/common';
import { CharactersRepository } from '@app/repository/character.repository';
import { CreateCharacterDto } from '../../../UI/dto/character/create-character.dto';
import { UpdateCharacterDto } from '../../../UI/dto/character/update-character.dto';
import { Character, CharacterCandidate } from '@app/core/models/character.model';

@Injectable()
export class CharactersService {
  constructor(private readonly characterRepo: CharactersRepository) {}

  async create(dto: CharacterCandidate) {
    return this.characterRepo.create(dto);
  }

  async findAll() {
    return this.characterRepo.findAll();
  }

  async findOne(id: bigint) {
    const character = await this.characterRepo.findById(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);
    return character;
  }

  async update(dto: Character) {
    const character = await this.characterRepo.findById(dto.id);
    if (!character) throw new NotFoundException(`Character with ID ${dto.id} not found`);

    return this.characterRepo.update(dto);
  }

  async remove(id: bigint) {
    const character = await this.characterRepo.findById(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);

    return this.characterRepo.delete(id);
  }
}