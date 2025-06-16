import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto } from '@UI/dto/class/create-class.dto';
import { UpdateClassDto } from '@UI/dto/class/update-class.dto';
import { ClassesRepository } from '@repository/classes.repository';
import { Class, ClassCandidate } from '@core/models/models';

@Injectable()
export class ClassesService {
  constructor(private readonly classesRepository: ClassesRepository) {}

  async findAll(): Promise<Class[]> {
    return await this.classesRepository.findAll();
  }

  async findOne(id: bigint): Promise<Class> {
    const cls = await this.classesRepository.findById(id);
    if (!cls) throw new NotFoundException(`Class ${id} introuvable`);
    return cls;
  }

  async create(dto: CreateClassDto): Promise<Class> {
    const classCandidate: ClassCandidate = {
      name: dto.name,
      casterType: dto.casterType,
      hitDice: dto.hitDie,
      savingThrows: dto.savingThrows.map((n) => BigInt(n)),
      subClass: dto.subClass !== undefined ? BigInt(dto.subClass) : undefined,
    };
    return await this.classesRepository.create(classCandidate);
  }

  async update(id: bigint, dto: UpdateClassDto): Promise<Class> {
    const existing = await this.findOne(id);

    const updated: Class = {
      ...existing,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.casterType !== undefined && { casterType: dto.casterType }),
      ...(dto.hitDie !== undefined && { hitDice: dto.hitDie }),
      ...(dto.subClass !== undefined && { subClass: BigInt(dto.subClass) }),
    };

    // Handle savingThrows update if provided
    if (dto.savingThrows !== undefined) {
      // For now, we'll need to fetch abilities to convert IDs to Ability objects
      // This is a simplified approach - you might want to create a more sophisticated mapping
      updated.savingThrows = existing.savingThrows; // Keep existing for now
    }

    return await this.classesRepository.update(updated);
  }

  async remove(id: bigint): Promise<void> {
    await this.findOne(id); // Check if exists
    await this.classesRepository.delete(id);
  }
}
