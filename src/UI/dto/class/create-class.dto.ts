import { Class, ClassCandidate } from '@app/core/models/class.model';
import {IsString,IsNotEmpty,IsNumber,IsArray,ArrayNotEmpty,IsOptional,} from 'class-validator';

export class CreateClassDto {
  @IsString() @IsNotEmpty()
  name: string;

  @IsNumber()
  hitDice: number;

  @IsArray() @ArrayNotEmpty()
  savingThrows: bigint[];

  @IsOptional()
  subClass?: bigint;

  toModel(id: bigint): Class {
      return {
        id: id,
        name: this.name,
        hitDice: this.hitDice,
        savingThrows: this.savingThrows,
        subClass: this.subClass,
      };
    }
  
    toCandidate(): ClassCandidate {
      return {
        name: this.name,
        hitDice: this.hitDice,
        savingThrows: this.savingThrows,
        subClass: this.subClass,
      };
    }
}