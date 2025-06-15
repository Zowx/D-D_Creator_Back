import { IsNumber } from 'class-validator';

export class CreateBackgroundAbilityDto {
  @IsNumber()
  AbilityId: number;

  @IsNumber()
  value: number;
}
