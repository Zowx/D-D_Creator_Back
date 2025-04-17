import { Injectable } from '@nestjs/common';
import { CharacterDto } from 'src/character/dto/character.dto';

@Injectable()
export class CharacterService {
  createCharacter(characterData: any) {
    // appel bdd pour creer le personnage
    return { message: 'Character created successfully', character: characterData };
  }

  getCharacter(id:number): string {
    //appeler bdd pour recup les infos
    let rep = "pour id " + id + " : "+ {
      id: '1',
      name: 'John Doe',
      race: 'Human',
      class: 'Warrior',
      level: 1,
      alignment: 'Neutral Good',
      background: 'Soldier',
      strength: 15,
      dexterity: 12,
      constitution: 14,
      intelligence: 10,
      wisdom: 13,
      charisma: 8
    };
    return rep;
  }
}