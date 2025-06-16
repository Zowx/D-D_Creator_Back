import { BackgroundLanguage, BackgroundLanguageCandidate } from '@app/core/models/background.model';
import { IsNumber } from 'class-validator';

export class CreateBackgroundLanguageDto {
  LanguageId: bigint;
  BackgroundId: bigint;

  toModel(id: bigint): BackgroundLanguage {
          return {
            id: id,
            LanguageId: this.LanguageId,
            BackgroundId: this.BackgroundId,
          };
        }
  toCandidate(): BackgroundLanguageCandidate {
    return {
    LanguageId: this.LanguageId,
    };
  }
}