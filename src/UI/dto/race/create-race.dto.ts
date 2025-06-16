import { Race, RaceCandidate } from '@app/core/models/race.model';
import {IsString,IsNotEmpty,MaxLength,IsArray,ArrayNotEmpty,IsNumber,IsOptional,} from 'class-validator';

export class CreateRaceDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsArray() @ArrayNotEmpty()
  traitsId: bigint[];

  @IsOptional()
  @IsNumber()
  subrace_of?: bigint;

   toModel(id: bigint): Race {
          return {
            id: id,
            name: this.name,
            description: this.description,
            traitsId: this.traitsId,
            subrace_of: this.subrace_of,
          };
        }
         toCandidate(): RaceCandidate {
          return {
            name: this.name,
            description: this.description,
            traitsId: this.traitsId,
            subrace_of: this.subrace_of,
          };
        }
}