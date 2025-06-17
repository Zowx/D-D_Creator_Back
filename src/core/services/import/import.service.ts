import { ClassesRepository } from '@app/repository/classes.repository';
import { AbilitiesRepository, AlignmentsRepository, BackgroundsRepository, LanguagesRepository, RacesRepository, SkillRepository } from '@repository/repository';
import { ImportConnector } from '@app/ext.api/connector/import.connector';
import { Injectable } from '@nestjs/common';

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
        const alignmentsCandidate = await this.importConnector.getAlignments();
        await Promise.all(
            alignmentsCandidate.map((alignment) =>
                this.alignmentRepository.create(alignment)
            )
        );

        const languagesCandidate = await this.importConnector.getLanguages();
        await Promise.all(
            languagesCandidate.map((language) =>
                this.languagesRepository.create(language)
            )
        );
        const languages = await this.languagesRepository.findAll();

        const abilitiesCandidate = await this.importConnector.getAbilities();
        await Promise.all(
            abilitiesCandidate.map((ability) =>
                this.abilitiesRepository.create(ability)
            )
        );
        const abilities = await this.abilitiesRepository.findAll();

        const skillsCandidate = await this.importConnector.getSkills(abilities);
        await Promise.all(
            skillsCandidate.map((skill) =>
                this.skillsRepository.create(skill)
            )
        );
        const skills = await this.skillsRepository.findAll();

        const backgroundsCandidate = await this.importConnector.getBackgrounds(abilities, languages, skills);
        await Promise.all(
            backgroundsCandidate.map((background) =>
                this.backgroundsRepository.create(background)
            )
        );

        const racesCandidate = await this.importConnector.getRaces();
        await Promise.all(
            racesCandidate.map((race) =>
                this.racesRepository.create(race)
            ));
        const races = await this.racesRepository.findAll();
        const abilitiesWithSubRaces = await this.importConnector.setSubRaces(races);
        await Promise.all(
            abilitiesWithSubRaces.map((subRace) =>
                this.racesRepository.update(subRace)
            )
        );

        const classesCandidate = await this.importConnector.getClass(abilities);
        await Promise.all(
            classesCandidate.map((cls) =>
                this.classesRepository.create(cls)
            )
        );
        const classes = await this.classesRepository.findAll();
        const classesWithSubClasses = await this.importConnector.setSubClasses(classes);
        await Promise.all(
            classesWithSubClasses.map((subClass) =>
                this.classesRepository.update(subClass)
            )
        );

        return "Import completed successfully";
    }
}