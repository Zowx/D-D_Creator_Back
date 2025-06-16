import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';

export class CreateSkillDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsNumber()
  abilityId: number;
}
