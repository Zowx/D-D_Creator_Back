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

    try {
      // Import alignments with duplicate check
      const alignments = await this.importAlignments();
      data.push(alignments);

      // Import abilities with duplicate check
      const abilities = await this.importAbilities();
      data.push(abilities);

      // Import classes with duplicate check
      const classes = await this.importClasses();
      data.push(classes);

      // Import races with duplicate check
      const races = await this.importRaces();
      data.push(races);

      return data;
    } catch (error) {
      console.error('Error during import:', error);
      throw error;
    }
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

      console.log('🔍 Debugging class candidates:');
      classCandidates.slice(0, 3).forEach((cls, index) => {
        console.log(`Class ${index + 1}:`, {
          name: cls.name,
          hitDice: cls.hitDice,
          hitDiceType: typeof cls.hitDice,
          savingThrows: cls.savingThrows,
          subClass: cls.subClass,
        });
      });

      // Filter out subclasses that don't have valid hitDice (these are not standalone classes)
      const validClassCandidates = classCandidates.filter((cls) => {
        const isValid =
          cls.hitDice != null && cls.hitDice !== '' && cls.hitDice !== 'null';
        if (!isValid) {
          console.log(
            `❌ Filtering out "${cls.name}" - hitDice: ${cls.hitDice} (type: ${typeof cls.hitDice})`,
          );
        } else {
          console.log(`✅ Valid class "${cls.name}" - hitDice: ${cls.hitDice}`);
        }
        return isValid;
      });

      console.log(
        `Found ${classCandidates.length} total classes, ${validClassCandidates.length} valid standalone classes`,
      );

      const createdClasses: Class[] = [];

      // Create classes in database
      for (const classCandidate of validClassCandidates) {
        try {
          // Check if class already exists
          const existingClass = await this.classesRepository.findByName(
            classCandidate.name,
          );

          if (existingClass) {
            console.log(
              `⏭️  Class "${classCandidate.name}" already exists, skipping`,
            );
            createdClasses.push(existingClass);
          } else {
            const createdClass =
              await this.classesRepository.create(classCandidate);
            createdClasses.push(createdClass);
            console.log(
              `✅ Successfully created class: ${classCandidate.name}`,
            );
          }
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
      // Check if class already exists in database
      const existingClass = await this.classesRepository.findByName(className);
      if (existingClass) {
        console.log(`⏭️  Class "${className}" already exists in database`);
        return existingClass;
      }

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
      console.log(`✅ Successfully imported class: ${className}`);
      return createdClass;
    } catch (error) {
      console.error(`❌ Error importing class ${className}:`, error);
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
    const importedAlignments: any[] = [];

    for (const alignment of alignmentCandidates) {
      try {
        // Check if alignment already exists
        const existingAlignment = await this.alignmentRepository.findByName(
          alignment.name,
        );

        if (existingAlignment) {
          console.log(
            `⏭️  Alignment "${alignment.name}" already exists, skipping`,
          );
          importedAlignments.push(existingAlignment);
        } else {
          const createdAlignment =
            await this.alignmentRepository.create(alignment);
          console.log(`✅ Successfully created alignment: ${alignment.name}`);
          importedAlignments.push(createdAlignment);
        }
      } catch (error) {
        console.error(`❌ Error creating alignment ${alignment.name}:`, error);
      }
    }

    return importedAlignments;
  }

  /**
   * Import abilities if not already present
   */
  private async importAbilities() {
    const abilityCandidates = await this.importConnector.getAbilities();
    const importedAbilities: any[] = [];

    for (const ability of abilityCandidates) {
      try {
        // Check if ability already exists
        const existingAbility = await this.abilitiesRepository.findByName(
          ability.name,
        );

        if (existingAbility) {
          console.log(`⏭️  Ability "${ability.name}" already exists, skipping`);
          importedAbilities.push(existingAbility);
        } else {
          const createdAbility = await this.abilitiesRepository.create(ability);
          console.log(`✅ Successfully created ability: ${ability.name}`);
          importedAbilities.push(createdAbility);
        }
      } catch (error) {
        console.error(`❌ Error creating ability ${ability.name}:`, error);
      }
    }

    return importedAbilities;
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
        // Check if race already exists
        const existingRace = await this.racesRepository.findByName(
          raceCandidate.name,
        );

        if (existingRace) {
          console.log(
            `⏭️  Race "${raceCandidate.name}" already exists, skipping`,
          );
          createdRaces.push(existingRace);
        } else {
          const createdRace = await this.racesRepository.create(raceCandidate);
          createdRaces.push(createdRace);
          console.log(`✅ Successfully created race: ${raceCandidate.name}`);
        }
      } catch (error) {
        console.error(`❌ Error creating race ${raceCandidate.name}:`, error);
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
          console.error(`❌ Error updating subrace ${race.name}:`, error);
        }
      }
    }

    return racesWithSubraces;
  }
}
