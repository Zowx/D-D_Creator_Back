import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { SkillsService } from '@core/services/skill/skills.service';
import { CreateSkillDto } from '@UI/dto/skill/create-skill.dto';
import { UpdateSkillDto } from '@UI/dto/skill/update-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly svc: SkillsService) {}

  @Post()
  create(@Body() dto: CreateSkillDto) {
    return this.svc.create(dto);
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
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
