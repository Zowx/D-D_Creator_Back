export class PdfDto {
  // Informations de base
  classLevel: string;
  background: string;
  playerName: string;
  characterName: string;
  race: string;
  alignment: string;
  xp: string;

  // Statistiques
  abilities: {
    str: string;
    dex: string;
    con: string;
    int: string;
    wis: string;
    cha: string;
    strMod: string;
    dexMod: string;
    conMod: string;
    intMod: string;
    wisMod: string;
    chaMod: string;
  };

  // Combat
  combatStats: {
    profBonus: string;
    ac: string;
    initiative: string;
    speed: string;
    hpMax: string;
    hpCurrent: string;
    hpTemp: string;
    hdTotal: string;
    hd: string;
    passive: string;
  };

  // Sauvegardes
  savingThrows: {
    strength: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;
  };

  // Compétences
  skills: {
    acrobatics: string;
    animalHandling: string;
    arcana: string;
    athletics: string;
    deception: string;
    history: string;
    insight: string;
    intimidation: string;
    investigation: string;
    medicine: string;
    nature: string;
    perception: string;
    performance: string;
    persuasion: string;
    religion: string;
    sleightOfHand: string;
    stealth: string;
    survival: string;
  };

  // Traits de personnalité
  traits: {
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
  };

  // Armes
  weapons: {
    name: string;
    attackBonus: string;
    damage: string;
  }[];

  // Attaques & sorts
  attacksSpellcasting: string;

  // Monnaie
  currency: {
    cp: string;
    sp: string;
    ep: string;
    gp: string;
    pp: string;
  };

  // Langues et équipement
  proficienciesLanguages: string;
  equipment: string;
  featuresAndTraits: string;

  // CheckBoxes activés (cochés uniquement)
  activeCheckboxes: string[];
}
