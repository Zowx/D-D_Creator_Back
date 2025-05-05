import { Traits } from '../../shared/models/traits.model';

export class RaceDto {
  id: string;
  name: string;
  description: string;
  subraces: RaceDto[];
  traits: Traits[];
}