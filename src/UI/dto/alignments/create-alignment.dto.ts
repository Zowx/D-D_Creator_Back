import { Alignment, AlignmentCandidate } from '@app/core/models/alignment.model';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAlignmentDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  toModel(id: bigint): Alignment {
    return {
      id: id,
      name: this.name,
      description: this.description,
    };
  }
  toCandidate(): AlignmentCandidate {
    return {
      name: this.name,
      description: this.description,
    };
  }
}
