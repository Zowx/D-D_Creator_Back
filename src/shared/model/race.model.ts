import { TraitsCandidate } from "./traits.model";

export interface Race {
    id: bigint;
    name: string;
    description: string;
    traitsId: bigint[];
    subrace_of?: bigint;
}

export interface RaceCandidate {
    id?: bigint;
    name: string;
    description: string;
    traits: TraitsCandidate[];
    subrace_of?: bigint;
}