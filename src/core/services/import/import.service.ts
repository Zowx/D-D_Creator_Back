import {
  AbilitiesRepository,
  AlignmentsRepository,
  RacesRepository,
} from '@repository/repository';
import { ImportConnector } from '@app/ext.api/connector/import.connector';
import { Injectable } from '@nestjs/common';
import { Race } from '@app/core/models/models';

@Injectable()
export class ImportService {
  constructor(
    private readonly importConnector: ImportConnector,
    private readonly abilitiesRepository: AbilitiesRepository,
    private readonly alignmentRepository: AlignmentsRepository,
    private readonly racesRepository: RacesRepository,
  ) {}

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

    // Import races
    const racesCandidates = await this.importConnector.getRaces();
    const createdRaces: Race[] = [];

    // Create races in database
    for (const raceCandidate of racesCandidates) {
      try {
        const createdRace = await this.racesRepository.create(raceCandidate);
        createdRaces.push(createdRace);
      } catch (error) {
        console.error(`Error creating race ${raceCandidate.name}:`, error);
      }
    }

    // Handle subraces by updating parent relationships
    const racesWithSubraces =
      await this.importConnector.setSubRaces(createdRaces);

    // Update races with subrace relationships
    for (const race of racesWithSubraces) {
      if (race.subrace_of) {
        try {
          const parentRace = createdRaces.find((r) => r.id === race.subrace_of);
          if (parentRace) {
            await this.racesRepository.update(race.id, {
              name: race.name,
              description: race.description,
              traits: [],
              subrace_of: parentRace.id,
            });
          }
        } catch (error) {
          console.error(`Error updating subrace ${race.name}:`, error);
        }
      }
    }

    data.push(createdRaces);

    return data;
  }
}
