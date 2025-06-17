import { AlignmentCandidate, LanguageCandidate, AbilityCandidate, SkillCandidate, Ability, BackgroundCandidate, Language, Skill, RaceCandidate, Race, ClassCandidate, Class } from "@core/models/models";
import { AlignmentDto, LanguageDto, AbilityDto, SkillDto, BackgroundDto, RaceDto, ClassDto } from "@ext.api/dto/dtos";
import { CacheUtils } from "@core/utils/cache.utils";

export class ImportConnector {
    private readonly BASE_URL = 'https://api.open5e.com/';
    private readonly CACHE_LIFETIME = 1000 * 60 * 60 * 24; // 24 hours
    private readonly ENDPOINT = {
        alignments: this.BASE_URL + 'v2/alignments/',
        languages: this.BASE_URL + 'v2/languages/',
        abilities: this.BASE_URL + 'v2/abilities/',
        skills: this.BASE_URL + 'v2/skills/',
        backgrounds: this.BASE_URL + 'v2/backgrounds/',
        races: this.BASE_URL + 'v2/races/',
        classes: this.BASE_URL + 'v2/classes/',
    }

    /**
    * Fetch alignment data from the API and return it to model
    * 
    * @returns A promise that resolves to an array of Alignment objects
    */
    async getAlignments(): Promise<AlignmentCandidate[]> {
        try {
            let results = []
            let endpoint = this.ENDPOINT.alignments;

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
            let endpoint = this.ENDPOINT.languages;

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
            let endpoint = this.ENDPOINT.abilities;

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
            let endpoint = this.ENDPOINT.abilities;

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
            let endpoint = this.ENDPOINT.backgrounds;

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
            let endpoint = this.ENDPOINT.races;
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
            let endpoint = this.ENDPOINT.races;
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

    async getClass(abilities: Ability[]): Promise<ClassCandidate[]> {
        try {
            let results = []
            let endpoint = this.ENDPOINT.classes;

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => ClassDto.fromRequest(item));
            
            results = []
            endpoint = this.ENDPOINT.abilities;
            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }
            const dtosAbility = results.map((item: any) => AbilityDto.fromRequest(item));

            dtos.forEach((dto: ClassDto, index: number) => {
                const savingThrows = dto.savingThrows.map((savingThrow: string | bigint) => {
                    if (typeof savingThrow === 'bigint') return savingThrow;
                    const ability = dtosAbility.find((ability: AbilityDto) => ability.url === savingThrow);
                    if (ability) return abilities.find((a: Ability) => a.name === ability.name)?.id ?? undefined;
                });
                const filterSavingThrows = savingThrows.filter((id: bigint | undefined) => id != undefined);
                dtos[index].savingThrows = filterSavingThrows;
            });

            return dtos.map((dto: ClassDto) => dto.toModel());

        } catch (error) {
            console.error('Error fetching class data:', error);
            throw error;
        }
    }

    async setSubClasses(classes: Class[]): Promise<Class[]> {
        try {
            let results = []
            let endpoint = this.ENDPOINT.classes;

            while (endpoint) {
                const response = await CacheUtils.cacheData(endpoint, this.CACHE_LIFETIME);
                results = results.concat(response["results"]);
                endpoint = response["next"];
            }

            const dtos = results.map((item: any) => ClassDto.fromRequest(item));
            dtos.filter((dto: ClassDto) => !!dto.subClass).forEach((dto: ClassDto) => {
                const classModel = classes.find((classModel) => classModel.name === dtos.find((_dto) => _dto.url == dto.subClass)?.name);
                const classIndex = classes.findIndex((classModel) => classModel.name === dto.name);
                if (classIndex != -1 && classModel) {
                    classes[classIndex].subClass = classModel.id;
                }
            });
            return classes;
        } catch (error) {
            console.error('Error fetching sub-class data:', error);
            throw error;
        }
    }
}