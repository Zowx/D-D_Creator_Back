import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { SkillsService } from '@core/services/skill/skills.service';
import { CreateSkillDto } from '@UI/dto/skill/create-skill.dto';
import { UpdateSkillDto } from '@UI/dto/skill/update-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly svc: SkillsService) {}

  @Post()
  create(@Body() dto: CreateSkillDto) {
    const skill = dto.toCandidate();
    if (!skill) {
      throw new Error('Invalid skill data');
    }
    return this.svc.create(skill);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.svc.findOne(BigInt(id));
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: UpdateSkillDto,
  ) {
    const skill = dto.toModel?.(BigInt(id));
    if (!skill) {
      throw new Error('Invalid skill data');
    }
    return this.svc.update(skill);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
