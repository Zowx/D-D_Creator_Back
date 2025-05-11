import { Injectable } from "@nestjs/common";
import { Character } from "src/shared/model/character.model";
import { CharacterCandidateDto } from "src/UI/dto/character.dto";
import { CharacterRepository } from "src/shared/repositories/character.repository";

@Injectable()
export class CharacterService {
  private characters: Character[] = [];

  constructor(private readonly characterRepository: CharacterRepository) {}

  async getAllCharacters(): Promise<Character[]> {
    return this.characterRepository.getAllCharacters();
  }

  async getCharacter(id: number): Promise<Character | undefined> {
    const character = await this.characterRepository.getCharacterById(id);
    return character ? character : undefined;
  }

  createCharacter(characterData: CharacterCandidateDto): Character {
    const newCharacter = { ...characterData, id: this.characters.length + 1 };
    this.characters.push(newCharacter);
    return newCharacter;
  }

}
