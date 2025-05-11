import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CharacterService } from "../../shared/services/character.service";
import { CharacterDto } from "../dto/character.dto";
import { Character } from "src/shared/model/character.model";

@Controller("/character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getAllCharacters(): Promise<Character[]> {
    return await this.characterService.getAllCharacters();
  }

  @Get(":id")
  async getCharacter(id: number): Promise<Character | undefined> {
    return await this.characterService.getCharacter(id);
  }

  @Post()
  async createCharacter(@Body() characterData: any) {
    return this.characterService.createCharacter(characterData);
  }

}
