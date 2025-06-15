import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAlignmentDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;
}
