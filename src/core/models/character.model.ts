import { Skill } from './skill.model';
export interface Character {
    id: bigint;
    name: string;
    description: string;
    shortDescription: string;
}

export interface CharacterCandidate {
    name: string;
    description: string;
    shortDescription: string;
}

export interface CharacterSkill {
  id: bigint;
  value: string;
  characterId: bigint;
  skills:   Skill[];
}

/*model CharacterAbility {
  id          BigInt @id @default(autoincrement()) @unique
  characterId BigInt
  abilityId   BigInt

  character   Character @relation(fields: [characterId], references: [id])
  ability     Ability @relation(fields: [abilityId], references: [id])
}

model CharacterLanguage {
  id          BigInt @id @default(autoincrement())
  characterId BigInt
  languageId  BigInt

  character   Character @relation(fields: [characterId], references: [id])
  language    Language  @relation(fields: [languageId], references: [id])
}*/
