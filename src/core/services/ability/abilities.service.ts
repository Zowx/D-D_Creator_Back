import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateAbilityDto } from '../../../UI/abilities/dto/create-ability.dto';
import { UpdateAbilityDto } from '../../../UI/abilities/dto/update-ability.dto';

export interface Ability {
  id: bigint;
  name: string;
  description: string;
  shortDescription: string;
}

@Injectable()
export class AbilitiesService {
  private abilities: Ability[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Ability[] {
    return this.abilities;
  }

  findOne(id: bigint): Ability {
    const ability = this.abilities.find(a => a.id === id);
    if (!ability) throw new NotFoundException(`Ability ${id} introuvable`);
    return ability;
  }

  create(dto: CreateAbilityDto): Ability {
    const newAbility: Ability = {
      id: this.generateId(),
      ...dto,
    };
    this.abilities.push(newAbility);
    return newAbility;
  }

  update(id: bigint, dto: UpdateAbilityDto): Ability {
    const ability = this.findOne(id);
    const updated = { ...ability, ...dto };
    this.abilities = this.abilities.map(a => a.id === id ? updated : a);
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.abilities = this.abilities.filter(a => a.id !== id);
  }
}