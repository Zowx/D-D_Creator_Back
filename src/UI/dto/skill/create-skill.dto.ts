import { Skill, SkillCandidate } from '@app/core/models/skill.model';
import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';

export class CreateSkillDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  abilityId: bigint;

  toModel(id: bigint): Skill {
        return {
          id: id,
          name: this.name,
          description: this.description,
          abilityId: this.abilityId,
        };
      }
       toCandidate(): SkillCandidate {
        return {
          name: this.name,
          description: this.description,
          abilityId: this.abilityId,
        };
      }
}
