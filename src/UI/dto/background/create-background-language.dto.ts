import { IsNumber } from 'class-validator';

export class CreateBackgroundLanguageDto {
  @IsNumber()
  LanguageId: number;
}
