import {IsString,IsNotEmpty,MaxLength,IsArray,ArrayNotEmpty,IsNumber,IsOptional,} from 'class-validator';

export class CreateRaceDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsArray() @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  traitsId: number[];

  @IsOptional()
  @IsNumber()
  subrace_of?: number;
}
