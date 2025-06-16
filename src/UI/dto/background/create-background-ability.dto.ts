import { BackgroundAbility, BackgroundAbilityCandidate } from '@app/core/models/background.model';
import { IsNumber } from 'class-validator';

export class CreateBackgroundAbilityDto {
  @IsNumber()
  AbilityId: bigint;

  @IsNumber()
  value: number;

  backgroundId: bigint;

  toModel(id: bigint): BackgroundAbility {
        return {
          id: id,
          AbilityId: this.AbilityId,
          value: this.value,
          BackgroundId: this.backgroundId,
        };
      }
    
      toCandidate(): BackgroundAbilityCandidate {
        return {
          AbilityId: this.AbilityId,
          value: this.value,
        };
      }
}