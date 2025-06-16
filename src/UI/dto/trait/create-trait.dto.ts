import { Traits, TraitsCandidate } from '@app/core/models/traits.model';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTraitDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;
  
  toModel(id: bigint): Traits {
      return {
        id: id,
        name: this.name,
        description: this.description,
      };
    }
     toCandidate(): TraitsCandidate {
      return {
        name: this.name,
        description: this.description,
      };
    }
}
