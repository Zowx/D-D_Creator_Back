// Importation de l'interface modèle
import { BackgroundAbilityCandidate, BackgroundSkillCandidate } from '@app/shared/models/background.model';
import { Ability, BackgroundCandidate, Skill, Language } from '@app/shared/models/models';

const numberLetter = { 'none': 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6 };

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Background.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class BackgroundDto {
    id: bigint;
    name: string;
    description: string;
    ability: string;
    skills: string;
    languages: string;
    connectionAndMemento: string;
    adventuresAndAdvancement: string;
    featureName: string;
    featureDescription: string;

    /**
     * Crée une nouvelle instance de BackgroundDto.
     *
     * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
     * {
     *    id: bigint;
     *    name: string;
     *    description: string;
     *    ability: string;
     *    skills: string;
     *    languages: string;
     *    connectionAndMemento: string;
     *    adventuresAndAdvancement: string;
     *    featureName: string;
     *    featureDescription: string;
     * }
     */
    constructor(data?: Partial<BackgroundDto>) {
        Object.assign(this, data);
    }


    /**
     * Convertit le DTO en modèle Background.
     * 
     * @returns Background - Nouvelle instance du modèle.
     */
    toModel(abilities: Ability[], languages: Language[], skill: Skill[]): BackgroundCandidate {
        const filterLanguage = this.languages ? languages.filter((language: Language) => this.languages.toLowerCase().includes(language.name.toLowerCase())) : [];
        const languagesChoice = this.languages?.toLowerCase().includes("of your choice") ? numberLetter[this.languages.toLowerCase().split("of your choice")[0].split(' ').at(-2) ?? 'none'] : 0;

        const abilitiesCandidate: BackgroundAbilityCandidate[] = []
        if (this.ability) {
            for (const ability of abilities) {
                if (this.ability.includes(ability.name.toLowerCase())) {
                    const valueStr = this.ability.toLowerCase().split(ability.name.toLowerCase())[0].split('+').at(-1)?.split(' ')[0];
                    let valueInt = 0;
                    try {
                        valueInt = valueStr ? parseInt(valueStr, 10) : 0;
                    } catch (error) {
                        console.error(`Error parsing ability value: ${valueStr}`, error);
                    }
                    abilitiesCandidate.push({
                        AbilityId: ability.id
                        , value: valueInt,
                    });
                }
            }
        }
        const abilitiesChoice = this.ability?.includes("other") ? numberLetter[this.ability.split("other")[0].split(' ').at(-2) ?? 'none'] : 0;

        const skillsCandidate: BackgroundSkillCandidate[] = [];
        if (this.skills) {
            for (const skillItem of this.skills.split('either')[0].split(',')) {
                const curentSkill = skill.filter((s: Skill) => skillItem.toLowerCase().includes(s.name.toLowerCase()));
                const newSkillsCandidate = {
                    SkillsIds: curentSkill ? curentSkill.map((s: Skill) => s.id) : [],
                };
                if (newSkillsCandidate.SkillsIds.length > 0) {
                    skillsCandidate.push(newSkillsCandidate);
                }
            };
            const skillItem = this.skills.split('either')[1]
            if (skillItem) {
                const curentSkill = skill.filter((s: Skill) => skillItem.toLowerCase().includes(s.name.toLowerCase()));
                const newSkillsCandidate = {
                    SkillsIds: curentSkill ? curentSkill.map((s: Skill) => s.id) : [],
                };
                if (newSkillsCandidate.SkillsIds.length > 0) {
                    skillsCandidate.push(newSkillsCandidate);
                }
            }
        }
        const skillChoice = this.skills?.includes("of your choice") ? numberLetter[this.skills?.split("of your choice")[0].split(' ').at(-2) ?? 'none'] : 0;

        return {
            name: this.name,
            description: this.description,
            ability: abilitiesCandidate,
            abilityChoice: abilitiesChoice,
            skills: skillsCandidate,
            skillChoice: skillChoice,
            languages: filterLanguage.map((language) => ({ LanguageId: language.id })),
            languagesChoice: languagesChoice,
            connectionAndMemento: this.connectionAndMemento,
            adventuresAndAdvancement: this.adventuresAndAdvancement,
            featureName: this.featureName,
            featureDescription: this.featureDescription,
        };
    }

    /**
     * Crée un DTO à partir des données d'une requête.
     * 
     * @param {any} req - Données de la requête à convertir.
     * @returns BackgroundDto - Nouvelle instance du DTO.
     */
    static fromRequest(req: any): BackgroundDto {
        return new BackgroundDto({
            id: req.id,
            name: req.name,
            description: req.desc,
            ability: req.benefits.find((item: any) => item.type === 'ability_score')?.desc.toLowerCase(),
            skills: req.benefits.find((item: any) => item.type === 'skill_proficiency')?.desc.toLowerCase(),
            languages: req.benefits.find((item: any) => item.type === 'language')?.desc.toLowerCase(),
            connectionAndMemento: req.benefits.find((item: any) => item.type === 'connection_and_memento')?.desc,
            adventuresAndAdvancement: req.benefits.find((item: any) => item.type === 'adventures_and_advancement')?.desc,
            featureName: req.benefits.find((item: any) => item.type === 'feature')?.name,
            featureDescription: req.benefits.find((item: any) => item.type === 'feature')?.desc,
        });
    }
}