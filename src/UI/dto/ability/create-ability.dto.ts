import { Ability, AbilityCandidate } from '@app/core/models/ability.model';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAbilityDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  shortDescription: string;

  toCandidate(): AbilityCandidate {
    return {
      name: this.name,
      description: this.description,
      shortDescription: this.shortDescription,
    };
  }
  toModel(id: bigint): Ability {
    return {
      id: id,
      name: this.name,
      description: this.description,
      shortDescription: this.shortDescription,
    };
  }
}
