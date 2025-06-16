import { AbilitiesRepository, AlignmentsRepository } from '@repository/repository';
import { ImportConnector } from '@app/ext.api/connector/import.connector';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImportService {

    constructor(
        private readonly importConnector: ImportConnector,
        private readonly abilitiesRepository: AbilitiesRepository,
        private readonly alignmentRepository: AlignmentsRepository,
    ) { }

    async importData() {
        const data: any[] = [];

        (await this.importConnector.getAlignments()).forEach(async (alignment) => {
            await this.alignmentRepository.create(alignment);
        });
        const alignments = await this.importConnector.getAlignments();
        data.push(alignments);

        // data.push(this.fakeCreate(await this.importConnector.getLanguages()));

        (await this.importConnector.getAbilities()).forEach(async (ability) => {
            await this.abilitiesRepository.create(ability);
        });
        const abilities = await this.abilitiesRepository.findAll();
        data.push(abilities);

        // data.push(this.fakeCreate(await this.importConnector.getSkills(data[2])));
        // data.push(
        //     this.fakeCreate(
        //         await this.importConnector.getBackgrounds(data[2], data[1], data[3]),
        //     ),
        // );
        // data.push(this.fakeCreate(await this.importConnector.getRaces()));
        // data[5] = await this.importConnector.setSubRaces(data[5]);
        // data.push(this.fakeCreate(await this.importConnector.getClass(data[2])));

        return data;
    }
}