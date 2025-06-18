import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@repository/database.service';

import { Character, CharacterCandidate } from '@core/models/character.model';
import { CharacterDbo, CharacterCandidateDbo } from './dbo/character.dbo';

@Injectable()
export class CharactersRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Character[]> {
    const characters = await this.database.character.findMany({
      include: {
        abilities: { select: { abilityId: true, value: true } },
        skills: true,
        languages: true,
      },
    });
    return characters.map((char) => CharacterDbo.fromDb(char).toModel());
  }

  async findById(id: bigint): Promise<Character | null> {
    const character = await this.database.character.findUnique({
      where: { id },
      include: {
        abilities: { select: { abilityId: true } },
        skills: true,
        languages: true,
      },
    });

    if (!character) return null;
    return CharacterDbo.fromDb(character).toModel();
  }

  async create(candidate: CharacterCandidate): Promise<Character> {
    const characterDbo = CharacterCandidateDbo.fromModel(candidate);
    const created = await this.database.character.create({
      data: characterDbo.toDb(),
      include: {
        abilities: { select: { abilityId: true } },
        skills: true,
        languages: true,
      },
    });

    return CharacterDbo.fromDb(created).toModel();
  }

  async update(character: Character): Promise<Character> {
    const candidate: CharacterCandidate = {
      raceId: character.raceId,
      classId: character.classId,
      backgroundId: character.backgroundId,
      alignmentId: character.alignmentId,
      userId: character.userId,

      xp: character.xp,
      level: character.level,
      name: character.name,
      player: character.player,
      AC: character.AC,
      speed: character.speed,
      hp: character.hp,
      maxHp: character.maxHp,
      tempHp: character.tempHp,
      personality: character.personality,
      ideals: character.ideals,
      bonds: character.bonds,
      flaws: character.flaws,
      age: character.age,
      height: character.height,
      weight: character.weight,
      eyes: character.eyes,
      skin: character.skin,
      hair: character.hair,
      appearance: character.appearance,
      allies: character.allies,
      backstory: character.backstory,
      treasure: character.treasure,
      traits: character.traits,

      abilities: character.abilities,
      skillIds: character.skillIds,
      languageIds: character.languageIds,
    };

    const data = CharacterCandidateDbo.fromModel(candidate).toDb();

    const updated = await this.database.character.update({
      where: { id: character.id },
      data,
      include: {
        abilities: { select: { abilityId: true } },
        skills: true,
        languages: true,
      },
    });

    return CharacterDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint): Promise<void> {
    await this.database.character.delete({
      where: { id },
    });
  }
}
