import { BackgroundSkill, BackgroundSkillCandidate } from '@app/core/models/background.model';
import { IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';

export class CreateBackgroundSkillDto {
  @IsArray() @ArrayNotEmpty()
  SkillsIds: bigint[];
  BackgroundId: bigint;

  toModel(id: bigint): BackgroundSkill {
            return {
              id: id,
              SkillsIds: this.SkillsIds,
              BackgroundId: this.BackgroundId,
            };
          }
    toCandidate(): BackgroundSkillCandidate {
      return {
      SkillsIds: this.SkillsIds,
      };
    }
}
