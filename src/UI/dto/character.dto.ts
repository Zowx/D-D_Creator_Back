import { Race } from "src/shared/model/race.model";

export class CharacterDto {
    id: string; 
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

export class CharacterCandidateDto {
    name: string;
    race: Race;
    class: string;
    level: number;
    alignment: string;
    background: string;
    
}