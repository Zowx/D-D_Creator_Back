import {
  AbilitiesRepository,
  AlignmentsRepository,
  ClassesRepository,
  RacesRepository,
} from '@repository/repository';
import { ImportConnector } from '@app/ext.api/connector/import.connector';
import { Injectable } from '@nestjs/common';
import { Class, Race } from '@app/core/models/models';

@Injectable()
export class ImportService {
  constructor(
    private readonly importConnector: ImportConnector,
    private readonly abilitiesRepository: AbilitiesRepository,
    private readonly alignmentRepository: AlignmentsRepository,
    private readonly classesRepository: ClassesRepository,
    private readonly racesRepository: RacesRepository,
  ) {}

  async importData() {
    const data: any[] = [];

    // Import alignments
    (await this.importConnector.getAlignments()).forEach(async (alignment) => {
      await this.alignmentRepository.create(alignment);
    });
    const alignments = await this.importConnector.getAlignments();
    data.push(alignments);

    // Import abilities
    (await this.importConnector.getAbilities()).forEach(async (ability) => {
      await this.abilitiesRepository.create(ability);
    });
    const abilities = await this.abilitiesRepository.findAll();
    data.push(abilities);

    // Import classes
    const classes = await this.importClasses();
    data.push(classes);

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

  /**
   * Import all classes from the external API
   * @returns Promise<Class[]> - Array of imported classes
   */
  async importClasses(): Promise<Class[]> {
    try {
      // Get abilities first as they are needed for class saving throws
      const abilities = await this.abilitiesRepository.findAll();

      // Get class candidates from the API
      const classCandidates = await this.importConnector.getClass(abilities);

      // Filter out subclasses that don't have valid hitDice (these are not standalone classes)
      const validClassCandidates = classCandidates.filter(
        (cls) => cls.hitDice != null && cls.hitDice > 0,
      );

      console.log(
        `Found ${classCandidates.length} total classes, ${validClassCandidates.length} valid standalone classes`,
      );

      const createdClasses: Class[] = [];

      // Create classes in database
      for (const classCandidate of validClassCandidates) {
        try {
          const createdClass =
            await this.classesRepository.create(classCandidate);
          createdClasses.push(createdClass);
          console.log(`✅ Successfully created class: ${classCandidate.name}`);
        } catch (error) {
          console.error(
            `❌ Error creating class ${classCandidate.name}:`,
            error,
          );
        }
      }

      // Handle subclasses by updating parent relationships
      const classesWithSubclasses =
        await this.importConnector.setSubClasses(createdClasses);

      // Update classes with subclass relationships
      for (const cls of classesWithSubclasses) {
        if (cls.subClass) {
          try {
            const parentClass = createdClasses.find(
              (c) => c.id === cls.subClass,
            );
            if (parentClass) {
              await this.classesRepository.update(cls);
            }
          } catch (error) {
            console.error(`Error updating subclass ${cls.name}:`, error);
          }
        }
      }

      return classesWithSubclasses;
    } catch (error) {
      console.error('Error importing classes:', error);
      throw error;
    }
  }

  /**
   * Import a single class by name
   * @param className - Name of the class to import
   * @returns Promise<Class | null> - The imported class or null if not found
   */
  async importClassByName(className: string): Promise<Class | null> {
    try {
      const abilities = await this.abilitiesRepository.findAll();
      const classCandidates = await this.importConnector.getClass(abilities);

      const classCandidate = classCandidates.find(
        (c) => c.name.toLowerCase() === className.toLowerCase(),
      );
      if (!classCandidate) {
        console.warn(`Class with name ${className} not found in external API`);
        return null;
      }

      const createdClass = await this.classesRepository.create(classCandidate);
      return createdClass;
    } catch (error) {
      console.error(`Error importing class ${className}:`, error);
      throw error;
    }
  }

  /**
   * Check if classes need to be imported (if database is empty)
   * @returns Promise<boolean> - True if import is needed
   */
  async shouldImportClasses(): Promise<boolean> {
    try {
      const existingClasses = await this.classesRepository.findAll();
      return existingClasses.length === 0;
    } catch (error) {
      console.error('Error checking if classes import is needed:', error);
      return false;
    }
  }

  /**
   * Import all data including classes in optimized order
   * @returns Promise<any[]> - Array containing all imported data
   */
  async importAllData() {
    const data: any[] = [];

    try {
      // Import alignments first
      const alignments = await this.importAlignments();
      data.push(alignments);

      // Import abilities (needed for classes)
      const abilities = await this.importAbilities();
      data.push(abilities);

      // Import classes (depends on abilities)
      const classes = await this.importClasses();
      data.push(classes);

      // Import races
      const races = await this.importRaces();
      data.push(races);

      return data;
    } catch (error) {
      console.error('Error importing all data:', error);
      throw error;
    }
  }

  /**
   * Import alignments if not already present
   */
  private async importAlignments() {
    const alignmentCandidates = await this.importConnector.getAlignments();
    for (const alignment of alignmentCandidates) {
      try {
        await this.alignmentRepository.create(alignment);
      } catch (error) {
        console.error(`Error creating alignment ${alignment.name}:`, error);
      }
    }
    return alignmentCandidates;
  }

  /**
   * Import abilities if not already present
   */
  private async importAbilities() {
    const abilityCandidates = await this.importConnector.getAbilities();
    for (const ability of abilityCandidates) {
      try {
        await this.abilitiesRepository.create(ability);
      } catch (error) {
        console.error(`Error creating ability ${ability.name}:`, error);
      }
    }
    return await this.abilitiesRepository.findAll();
  }

  /**
   * Import races with subrace relationships
   */
  private async importRaces() {
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

    return racesWithSubraces;
  }
}
