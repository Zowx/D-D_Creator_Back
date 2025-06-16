import { IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';

export class CreateBackgroundSkillDto {
  @IsArray() @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  SkillsIds: number[];
}
