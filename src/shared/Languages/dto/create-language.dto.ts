import { IsString, IsNotEmpty, MaxLength, IsBoolean } from 'class-validator';

export class CreateLanguageDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsBoolean()
  exotic: boolean;

  @IsBoolean()
  secret: boolean;
}
