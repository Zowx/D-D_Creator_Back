import { Alignment } from "@app/core/models/alignment.model";
import { Background } from "@app/core/models/background.model";
import { CharacterAbility, CharacterLanguage } from "@app/core/models/character.model";
import { Class } from "@app/core/models/class.model";
import { Race } from "@app/core/models/race.model";
import { Skill } from "@app/core/models/skill.model";

export interface CharacterDto {
  id: bigint;
  raceId: bigint;
  classId: bigint;
  backgroundId: bigint;
  alignmentId: bigint;
  userId?: string;

  xp: number;
  level: number;
  name: string;
  player: string;
  AC: number;
  speed: number;
  hp: number;
  maxHp: number;
  tempHp: number;
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  appearance: string;
  allies: string;
  backstory: string;
  treasure: string;
  traits: string;

  race: Race;
  class: Class;
  background: Background;
  alignment: Alignment;

  abilities: CharacterAbility[];
  skills: Skill[];
  languages: CharacterLanguage[];
}