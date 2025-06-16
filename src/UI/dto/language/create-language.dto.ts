import { Language, LanguageCandidate } from '@app/core/models/language.model';
import { IsString, IsNotEmpty, MaxLength, IsBoolean } from 'class-validator';

export class CreateLanguageDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsBoolean()
  exotic: boolean;

  @IsBoolean()
  secret: boolean;

  toModel(id: bigint): Language {
    return {
      id: id,
      name: this.name,
      description: this.description,
      exotic: this.exotic,
      secret: this.secret,
    };
  }

  toCandidate(): LanguageCandidate {
    return {
      name: this.name,
      description: this.description,
      exotic: this.exotic,
      secret: this.secret,
    };
  }
}
