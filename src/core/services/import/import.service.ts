import { AbilitiesRepository, AlignmentsRepository, BackgroundsRepository, LanguagesRepository, SkillRepository } from '@repository/repository';
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
    ) { }

    async importData() {
        const data: any[] = [];

        (await this.importConnector.getAlignments()).forEach(async (alignment) => {
            await this.alignmentRepository.create(alignment);
        });
        const alignments = await this.importConnector.getAlignments();
        data.push(alignments);

        (await this.importConnector.getLanguages()).forEach(async (language) => {
            await this.languagesRepository.create(language);
        });
        const languages = await this.languagesRepository.findAll();
        data.push(languages);

        (await this.importConnector.getAbilities()).forEach(async (ability) => {
            await this.abilitiesRepository.create(ability);
        });
        const abilities = await this.abilitiesRepository.findAll();
        data.push(abilities);

        (await this.importConnector.getSkills(abilities)).forEach(async (skill) => {
            await this.skillsRepository.create(skill);
        });
        const skills = await this.skillsRepository.findAll();
        data.push(skills);

        // (await this.importConnector.getBackgrounds(abilities, languages, skills)).forEach(async (background) => {
        //     await this.backgroundsRepository.create(background);
        // });
        // const backgrounds = await this.backgroundsRepository.findAll();
        // data.push(backgrounds);


        
        // data.push(this.fakeCreate(await this.importConnector.getRaces()));
        // data[5] = await this.importConnector.setSubRaces(data[5]);
        // data.push(this.fakeCreate(await this.importConnector.getClass(data[2])));

        return data;
    }
}