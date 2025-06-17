import { ClassesRepository } from '@app/repository/classes.repository';
import { AbilitiesRepository, AlignmentsRepository, BackgroundsRepository, LanguagesRepository, RacesRepository, SkillRepository } from '@repository/repository';
import { ImportConnector } from '@app/ext.api/connector/import.connector';
import { Injectable } from '@nestjs/common';
import { race } from 'rxjs';

@Injectable()
export class ImportService {

    constructor(
        private readonly importConnector: ImportConnector,
        private readonly abilitiesRepository: AbilitiesRepository,
        private readonly alignmentRepository: AlignmentsRepository,
        private readonly languagesRepository: LanguagesRepository,
        private readonly skillsRepository: SkillRepository,
        private readonly backgroundsRepository: BackgroundsRepository,
        private readonly classesRepository: ClassesRepository,
        private readonly racesRepository: RacesRepository,
    ) { }

    async importData() {
        const data: any[] = [];

        (await this.importConnector.getAlignments()).forEach(async (alignment) => {
            await this.alignmentRepository.create(alignment);
        });

        (await this.importConnector.getLanguages()).forEach(async (language) => {
            await this.languagesRepository.create(language);
        });
        const languages = await this.languagesRepository.findAll();

        (await this.importConnector.getAbilities()).forEach(async (ability) => {
            await this.abilitiesRepository.create(ability);
        });
        const abilities = await this.abilitiesRepository.findAll();

        (await this.importConnector.getSkills(abilities)).forEach(async (skill) => {
            await this.skillsRepository.create(skill);
        });
        const skills = await this.skillsRepository.findAll();

        (await this.importConnector.getBackgrounds(abilities, languages, skills)).forEach(async (background) => {
            await this.backgroundsRepository.create(background);
        });

        (await this.importConnector.getRaces()).forEach(async (race) => {
            await this.racesRepository.create(race);
        });
        const races = await this.racesRepository.findAll();
        (await this.importConnector.setSubRaces(races)).forEach(async (subRace) => {
            await this.racesRepository.update(subRace);
        });

        (await this.importConnector.getClass(abilities)).forEach(async (cls) => {
            await this.classesRepository.create(cls);
        });
        const classes = await this.classesRepository.findAll();
        (await this.importConnector.setSubClasses(classes)).forEach(async (subClass) => {
            await this.classesRepository.update(subClass);
        });

        return "Import completed successfully";
    }
}