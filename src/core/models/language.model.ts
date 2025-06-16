export interface Language {
    id: bigint;
    name: string;
    description: string;
    exotic: boolean;
}

export interface LanguageCandidate {
    name: string;
    description: string;
    exotic: boolean;
}