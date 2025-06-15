import {IsString,IsNotEmpty,IsNumber,IsArray,ArrayNotEmpty,IsOptional,} from 'class-validator';

export class CreateClassDto {
  @IsString() @IsNotEmpty()
  name: string;

  @IsString() @IsNotEmpty()
  casterType: string;

  @IsNumber()
  hitDie: number;

  @IsArray() @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  savingThrows: number[];

  @IsOptional()
  @IsNumber()
  subClass?: number;
}
