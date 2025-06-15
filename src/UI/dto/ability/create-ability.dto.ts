import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAbilityDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  shortDescription: string;
}
