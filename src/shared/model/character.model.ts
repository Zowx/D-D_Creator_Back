import { Race } from "./race.model";

export class Character {
  id: number;
  name: string;
  race: Race;
  class: string;
  level: number;
  alignment: string;
  background: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
