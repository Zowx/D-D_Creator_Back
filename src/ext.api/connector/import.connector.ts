import { AlignmentCandidate, LanguageCandidate, AbilityCandidate, SkillCandidate, Ability, BackgroundCandidate, Language, Skill, RaceCandidate, Race } from "@shared/model/models";
import { AlignmentDto, LanguageDto, AbilityDto, SkillDto, BackgroundDto, RaceDto } from "@ext.api/dto/dtos";
import { CacheUtils } from "@shared/utils/cache.utils";

export class ImportConnector {
    private readonly BASE_URL = 'https://api.open5e.com/';
    private readonly CACHE_LIFETIME = 1000 * 60 * 60 * 24; // 24 hours

    /**
    * Fetch alignment data from the API and return it to model
    * 
    * @returns A promise that resolves to an array of Alignment objects
    */
    async getAlignments(): Promise<AlignmentCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/alignments/`

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => AlignmentDto.fromRequest(item));
            return dtos.map((dto: AlignmentDto) => dto.toModel());

        } catch (error) {
            console.error('Error fetching alignment data:', error);
            throw error;
        }
    }

    /**
     * Fetch language data from the API and return it to model
     *  
     * @returns A promise that resolves to an array of Language objects
     */
    async getLanguages(): Promise<LanguageCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/languages/`

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => LanguageDto.fromRequest(item));
            return dtos.map((dto: LanguageDto) => dto.toModel());

        } catch (error) {
            console.error('Error fetching language data:', error);
            throw error;
        }
    }

    /**
     * Fetch ability data from the API and return it to model
     * 
     * @returns A promise that resolves to an array of Ability objects
     */
    async getAbilities(): Promise<AbilityCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/abilities/`

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => AbilityDto.fromRequest(item));
            return dtos.map((dto: AbilityDto) => dto.toModel());

        } catch (error) {
            console.error('Error fetching ability data:', error);
            throw error;
        }
    }

    /**
     * Fetch skill data from the API and return it to model
     * 
     * @returns A promise that resolves to an array of Skill objects
     */
    async getSkills(abilities: Ability[]): Promise<SkillCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/abilities/`

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtosAbility = results.map((item: any) => AbilityDto.fromRequest(item));

            const dtosSkill: SkillDto[] = [];
            for (const dtoAbility of dtosAbility) {
                const abilityId = abilities.find((ability: Ability) => ability.name === dtoAbility.name)?.id;
                dtoAbility.skillsId && dtosSkill.push(...dtoAbility.skillsId.map((skill: SkillDto) => {
                    skill.abilityId = abilityId;
                    return skill;
                }));
            }

            return dtosSkill.map((dto: SkillDto) => dto.toModel());
        } catch (error) {
            console.error('Error fetching skill data:', error);
            throw error;
        }
    }

    async getBackgrounds(abilities: Ability[], languages: Language[], skill: Skill[]): Promise<BackgroundCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/backgrounds/`

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => BackgroundDto.fromRequest(item));

            return dtos.map((dto: BackgroundDto) => dto.toModel(abilities, languages, skill));
        } catch (error) {
            console.error('Error fetching background data:', error);
            throw error;
        }
    }

    async getRaces(): Promise<RaceCandidate[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/races/`
            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => RaceDto.fromRequest(item));

            return dtos.map((dto: RaceDto) => dto.toModel());
        } catch (error) {
            console.error('Error fetching race data:', error);
            throw error;
        }
    }

    async setSubRaces(races: Race[]): Promise<Race[]> {
        try {
            let results = []
            let endpoint = `${this.BASE_URL}v2/races/`
            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => RaceDto.fromRequest(item));
            dtos.filter((dto: RaceDto) => !!dto.subrace_of).forEach((dto: RaceDto) => {
                const race = races.find((race) => race.name === dtos.find((_dto) => _dto.url == dto.subrace_of)?.name);
                const raceIndex = races.findIndex((race) => race.name === dto.name);
                if (raceIndex != -1 && race) {
                    races[raceIndex].subrace_of = race.id;
                }
            });
            return races;
        } catch (error) {
            console.error('Error fetching race data:', error);
            throw error;
        }
    }
}