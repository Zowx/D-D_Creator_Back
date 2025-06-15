import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';

export interface Race {
  id: bigint;
  name: string;
  description: string;
  traitsId: bigint[];
  subrace_of?: bigint;
}

@Injectable()
export class RacesService {
  private races: Race[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Race[] {
    return this.races;
  }

  findOne(id: bigint): Race {
    const race = this.races.find(r => r.id === id);
    if (!race) throw new NotFoundException(`Race ${id} introuvable`);
    return race;
  }

  create(dto: CreateRaceDto): Race {
    const newRace: Race = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
      traitsId: dto.traitsId.map(t => BigInt(t)),
      subrace_of: dto.subrace_of !== undefined ? BigInt(dto.subrace_of) : undefined,
    };
    this.races.push(newRace);
    return newRace;
  }

  update(id: bigint, dto: UpdateRaceDto): Race {
    const existing = this.findOne(id);
    const updated: Race = {
      ...existing,
      ...(dto.name        !== undefined && { name: dto.name }),
      ...(dto.description !== undefined && { description: dto.description }),
      ...(dto.traitsId    !== undefined && { traitsId: dto.traitsId.map(t => BigInt(t)) }),
      ...(dto.subrace_of  !== undefined && { subrace_of: BigInt(dto.subrace_of) }),
    };
    this.races = this.races.map(r => (r.id === id ? updated : r));
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.races = this.races.filter(r => r.id !== id);
  }
}
