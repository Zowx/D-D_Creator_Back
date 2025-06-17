import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@repository/database.service';
import { Background, BackgroundCandidate } from '@core/models/models';
import { BackgroundDbo, BackgroundCandidateDbo } from '@repository/dbo/background.dbo';

@Injectable()
export class BackgroundsRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Background[]> {
    const backgrounds = await this.database.background.findMany({
      include: {
        abilities: true,
        skills: true,
        languages: true,
      },
    });

    return backgrounds.map((bg) => BackgroundDbo.fromDb(bg).toModel());
  }

  async findById(id: bigint): Promise<Background | null> {
    const bg = await this.database.background.findUnique({
      where: { id },
      include: {
        abilities: true,
        skills: true,
        languages: true,
      },
    });

    if (!bg) return null;

    return BackgroundDbo.fromDb(bg).toModel();
  }

  async create(candidate: BackgroundCandidate): Promise<Background> {
    const created = await this.database.background.create({
      data: BackgroundCandidateDbo.fromModel(candidate).toDb(),
      include: {
        abilities: true,
        skills: true,
        languages: true,
      },
    });

    return BackgroundDbo.fromDb(created).toModel();
  }

  async update(background: Background): Promise<Background> {
    const id = background.id;

    // On reconstruit le candidat à partir du modèle
    const candidate: BackgroundCandidate = {
      name: background.name,
      description: background.description,
      ability: background.abilityIds.map((id) => ({
        AbilityId: id,
        value: 1, // valeur par défaut ou récupérée ailleurs
      })),
      abilityChoice: background.abilityChoice,
      skills: [{ SkillsIds: background.skillsIds }],
      skillChoice: background.skillChoice,
      languages: background.languagesIds.map((id) => ({ LanguageId: id })),
      languagesChoice: background.languagesChoice,
      connectionAndMemento: background.connectionAndMemento,
      adventuresAndAdvancement: background.adventuresAndAdvancement,
      featureName: background.featureName,
      featureDescription: background.featureDescription,
    };

    // ⚠️ Suppression des relations existantes avant recréation
    await this.database.background.update({
      where: { id },
      data: {
        abilities: { deleteMany: {} },
        skills: { deleteMany: {} },
        languages: { deleteMany: {} },
      },
    });

    const updated = await this.database.background.update({
      where: { id },
      data: BackgroundCandidateDbo.fromModel(candidate).toDb(),
      include: {
        abilities: true,
        skills: true,
        languages: true,
      },
    });

    return BackgroundDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint): Promise<void> {
    await this.database.background.delete({
      where: { id },
    });
  }

  async findByName(name: string): Promise<Background | null> {
    const bg = await this.database.background.findUnique({
      where: { name },
      include: {
        abilities: true,
        skills: true,
        languages: true,
      },
    });

    if (!bg) return null;

    return BackgroundDbo.fromDb(bg).toModel();
  }
}
