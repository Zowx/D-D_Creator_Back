import { Controller, Post, Body, Get } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './dto/character.dto';

@Controller('/character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}
  
  @Get(':id')
    getCharacter(id : number): string {
      return this.characterService.getCharacter(id);
  }
  
  @Post()
  createCharacter(@Body() characterData: any) {
    return this.characterService.createCharacter(characterData);
  }

}