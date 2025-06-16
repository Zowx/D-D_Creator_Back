import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRaceDto } from '@UI/dto/race/create-race.dto';
import { UpdateRaceDto } from '@UI/dto/race/update-race.dto';
import { Race, RaceCandidate } from '@app/core/models/models';
import { RacesRepository } from '@repository/repository';

@Injectable()
export class RacesService {
  constructor(private readonly racesRepository: RacesRepository) {}

  async findAll(): Promise<Race[]> {
    return await this.racesRepository.findAll();
  }

  async findOne(id: bigint): Promise<Race> {
    const race = await this.racesRepository.findById(id);
    if (!race) throw new NotFoundException(`Race ${id} introuvable`);
    return race;
  }

  async create(dto: CreateRaceDto): Promise<Race> {
    // Convert DTO to RaceCandidate model
    const raceCandidate: RaceCandidate = {
      name: dto.name,
      description: dto.description,
      traits: [], // Les traits seront gérés séparément si nécessaire
      subrace_of:
        dto.subrace_of !== undefined ? BigInt(dto.subrace_of) : undefined,
    };

    return await this.racesRepository.create(raceCandidate);
  }

  async update(id: bigint, dto: UpdateRaceDto): Promise<Race> {
    const existing = await this.findOne(id);
    const updateDto = dto as Partial<CreateRaceDto>;

    // Convert DTO to RaceCandidate model for update
    const raceCandidate: RaceCandidate = {
      name: updateDto.name ?? existing.name,
      description: updateDto.description ?? existing.description,
      traits: [], // Les traits seront gérés séparément si nécessaire
      subrace_of:
        updateDto.subrace_of !== undefined
          ? BigInt(updateDto.subrace_of)
          : existing.subrace_of,
    };

    const updated = await this.racesRepository.update(id, raceCandidate);
    if (!updated) throw new NotFoundException(`Race ${id} introuvable`);
    return updated;
  }

  async remove(id: bigint): Promise<void> {
    await this.findOne(id); // Vérifie que la race existe
    const deleted = await this.racesRepository.delete(id);
    if (!deleted)
      throw new NotFoundException(`Impossible de supprimer la race ${id}`);
  }

  async findSubraces(parentRaceId: bigint): Promise<Race[]> {
    return await this.racesRepository.findSubraces(parentRaceId);
  }

  async findByName(name: string): Promise<Race | null> {
    return await this.racesRepository.findByName(name);
  }
}
