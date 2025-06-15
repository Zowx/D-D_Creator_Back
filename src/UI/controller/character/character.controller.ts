import { Body, Controller, Get, Post } from "@nestjs/common";
import { CharacterService } from "@core/services/character/character.service";

@Controller("/character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get(":id")
  getCharacter(id: number): string {
    return this.characterService.getCharacter(id);
  }

  @Post()
  createCharacter(@Body() characterData: any) {
    return this.characterService.createCharacter(characterData);
  }
}
