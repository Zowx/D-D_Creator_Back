import { Injectable, NotFoundException } from '@nestjs/common';
import { RaceCandidate, Race } from '@app/core/models/race.model';
import { RacesRepository } from '@app/repository/repository';


@Injectable()
export class RacesService {

  constructor(private readonly racesRepository: RacesRepository) {}

  async findAll(): Promise<Race[]> {
    return await this.racesRepository.findAll();
  }

  async findOne(id: bigint): Promise<Race> {
    return this.racesRepository.findById(id);
  }

  async create(candidate: RaceCandidate): Promise<Race> {
    return this.racesRepository.create(candidate);
  }

  async update(data: Race): Promise<Race> {
    const existing = await this.racesRepository.findById(data.id);
    if (!existing) {
      throw new NotFoundException(`Race with id ${data.id} not found`);
    }
    return this.racesRepository.update(data);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.racesRepository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Race with id ${id} not found`);
    }
    await this.racesRepository.delete(id);
  }
}