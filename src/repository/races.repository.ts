import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Race, RaceCandidate } from '@app/core/models/models';
import { RaceCandidateDbo, RaceDbo } from './dbo/dbo';

@Injectable()
export class RacesRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Race[]> {
    const races = await this.database.race.findMany({
      include: {
        traits: {
          include: {
            trait: true,
          },
        },
      },
    });

    return races.map((race) => {
      const raceDbo = RaceDbo.fromDb(race);
      const raceModel = raceDbo.toModel();
      // Populate traitsId from the relation
      raceModel.traitsId = race.traits.map((rt) => rt.trait.id);
      return raceModel;
    });
  }

  async findById(id: bigint): Promise<Race | null> {
    const race = await this.database.race.findUnique({
      where: { id },
      include: {
        traits: {
          include: {
            trait: true,
          },
        },
      },
    });

    if (!race) return null;

    const raceDbo = RaceDbo.fromDb(race);
    const raceModel = raceDbo.toModel();
    // Populate traitsId from the relation
    raceModel.traitsId = race.traits.map((rt) => rt.trait.id);
    return raceModel;
  }
  async create(raceCandidate: RaceCandidate): Promise<Race> {
    const raceData = RaceCandidateDbo.fromModel(raceCandidate).toDb();

    const createdRace = await this.database.race.create({
      data: raceData,
      include: {
        traits: {
          include: {
            trait: true,
          },
        },
      },
    });

    // Create trait associations if provided
    if (raceCandidate.traits && raceCandidate.traits.length > 0) {
      const traitConnections: { raceId: bigint; traitId: bigint }[] = [];

      for (const trait of raceCandidate.traits) {
        // First, ensure the trait exists or create it
        let existingTrait = await this.database.trait.findFirst({
          where: { name: trait.name },
        });

        existingTrait ??= await this.database.trait.create({
          data: {
            name: trait.name,
            description: trait.description,
          },
        });

        traitConnections.push({
          raceId: createdRace.id,
          traitId: existingTrait.id,
        });
      }

      // Create all trait connections
      await this.database.raceTrait.createMany({
        data: traitConnections,
      });
    }

    // Fetch the complete race with traits
    return (await this.findById(createdRace.id)) as Race;
  }

  async update(id: bigint, raceCandidate: RaceCandidate): Promise<Race | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const raceData = RaceCandidateDbo.fromModel(raceCandidate).toDb();

    await this.database.race.update({
      where: { id },
      data: raceData,
    });

    // Update trait associations if provided
    if (raceCandidate.traits !== undefined) {
      // Remove existing trait associations
      await this.database.raceTrait.deleteMany({
        where: { raceId: id },
      });

      // Add new trait associations
      if (raceCandidate.traits.length > 0) {
        const traitConnections: { raceId: bigint; traitId: bigint }[] = [];

        for (const trait of raceCandidate.traits) {
          // First, ensure the trait exists or create it
          let existingTrait = await this.database.trait.findFirst({
            where: { name: trait.name },
          });

          existingTrait ??= await this.database.trait.create({
            data: {
              name: trait.name,
              description: trait.description,
            },
          });

          traitConnections.push({
            raceId: id,
            traitId: existingTrait.id,
          });
        }

        await this.database.raceTrait.createMany({
          data: traitConnections,
        });
      }
    }

    return await this.findById(id);
  }

  async delete(id: bigint): Promise<boolean> {
    try {
      // Delete trait associations first
      await this.database.raceTrait.deleteMany({
        where: { raceId: id },
      });

      // Delete the race
      await this.database.race.delete({
        where: { id },
      });

      return true;
    } catch (error) {
      console.error('Failed to delete race:', error);
      return false;
    }
  }

  async findSubraces(parentRaceId: bigint): Promise<Race[]> {
    const subraces = await this.database.race.findMany({
      where: { subraceOfId: parentRaceId },
      include: {
        traits: {
          include: {
            trait: true,
          },
        },
      },
    });

    return subraces.map((race) => {
      const raceDbo = RaceDbo.fromDb(race);
      const raceModel = raceDbo.toModel();
      raceModel.traitsId = race.traits.map((rt) => rt.trait.id);
      return raceModel;
    });
  }

  async findByName(name: string): Promise<Race | null> {
    const race = await this.database.race.findFirst({
      where: { name },
      include: {
        traits: {
          include: {
            trait: true,
          },
        },
      },
    });

    if (!race) return null;

    const raceDbo = RaceDbo.fromDb(race);
    const raceModel = raceDbo.toModel();
    raceModel.traitsId = race.traits.map((rt) => rt.trait.id);
    return raceModel;
  }
}
