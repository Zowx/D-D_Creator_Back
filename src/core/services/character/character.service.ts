import { Injectable, NotFoundException } from '@nestjs/common';
import { CharactersRepository } from '@app/repository/character.repository';
import { Character, CharacterCandidate } from '@app/core/models/character.model';

@Injectable()
export class CharactersService {
  constructor(private readonly characterRepo: CharactersRepository) {}

  async create(candidate: CharacterCandidate) {
    return await this.characterRepo.create(candidate);
  }


  async findAll() {
    return await this.characterRepo.findAll();
  }

  async findOne(id: bigint) {
    const character = await this.characterRepo.findById(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);
    return character;
  }

  async update(candidate: Character) {
    const character = await this.characterRepo.findById(candidate.id);
    if (!character) throw new NotFoundException(`Character with ID ${candidate.id} not found`);

    return this.characterRepo.update(candidate);
  }

  async remove(id: bigint) {
    const character = await this.characterRepo.findById(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);

    return this.characterRepo.delete(id);
  }
}