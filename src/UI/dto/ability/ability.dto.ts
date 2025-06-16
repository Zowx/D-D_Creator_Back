import { Ability, AbilityCandidate } from "@app/core/models/ability.model";

export class AbilityDto {
    id: bigint;
    name: string;
    description: string;
    shortDescription: string;

  static fromRequest(dto: Partial<AbilityDto>): Ability {
    return {
      id: dto.id ? BigInt(dto.id) : undefined,
      name: dto.name,
      description: dto.description,
      shortDescription: dto.shortDescription,
    } as Ability;
  }

  static toDto(model: Ability): AbilityDto {
    const dto = new AbilityDto();
    dto.id = model.id;
    dto.name = model.name;
    dto.description = model.description;
    dto.shortDescription = model.shortDescription;
    return dto;
  }

   toModel(): AbilityCandidate {
    return {
      name: this.name,
      description: this.description,
      shortDescription: this.shortDescription,
    };
  }
}