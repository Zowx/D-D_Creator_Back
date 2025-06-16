export interface Language {
    id: bigint;
    name: string;
    description: string;
    exotic: boolean;
    secret: boolean;
}

export interface LanguageCandidate {
    name: string;
    description: string;
    exotic: boolean;
    secret: boolean;
}