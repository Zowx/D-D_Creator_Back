import { Injectable, NotFoundException } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { CreateCharacterDto } from '../../../UI/dto/character/create-character.dto';
import { UpdateCharacterDto } from '../../../UI/dto/character/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(private readonly characterRepo: CharacterRepository) {}

  async create(dto: CreateCharacterDto) {
    return this.characterRepo.create(dto);
  }

  async findAll() {
    return this.characterRepo.findAll();
  }

  async findOne(id: bigint) {
    const character = await this.characterRepo.findOne(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);
    return character;
  }

  async update(id: bigint, dto: UpdateCharacterDto) {
    const character = await this.characterRepo.findOne(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);

    return this.characterRepo.update(id, dto);
  }

  async remove(id: bigint) {
    const character = await this.characterRepo.findOne(id);
    if (!character) throw new NotFoundException(`Character with ID ${id} not found`);

    return this.characterRepo.delete(id);
  }
}
