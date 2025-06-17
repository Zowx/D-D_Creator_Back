import { Injectable, NotFoundException } from '@nestjs/common';
import { Class, ClassCandidate } from '@core/models/class.model';
import { ClassesRepository } from '@repository/classes.repository';

@Injectable()
export class ClassesService {
  constructor(private readonly classesRepository: ClassesRepository) { }

  async findAll(): Promise<Class[]> {
    return this.classesRepository.findAll();
  }

  async findOne(id: bigint): Promise<Class> {
    const foundClass = await this.classesRepository.findById(id);
    if (!foundClass) {
      throw new NotFoundException(`Class ${id} introuvable`);
    }
    console.log('ClassesService.findAll', foundClass);
    return foundClass;
  }

  async create(candidate: ClassCandidate): Promise<Class> {
    return this.classesRepository.create(candidate) as any;
  }

  async update(data: Class): Promise<Class> {
    const existingClass = await this.classesRepository.findById(data.id);
    if (!existingClass) {
      throw new NotFoundException(`Class ${data.id} introuvable`);
    }
    return this.classesRepository.update(data) as any;
  }

  async remove(id: bigint): Promise<void> {
    const existingClass = await this.classesRepository.findById(id);
    if (!existingClass) {
      throw new NotFoundException(`Class ${id} introuvable`);
    }
    return this.classesRepository.delete(id) as any;
  }
}