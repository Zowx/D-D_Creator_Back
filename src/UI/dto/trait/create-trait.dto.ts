import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTraitDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;
}
