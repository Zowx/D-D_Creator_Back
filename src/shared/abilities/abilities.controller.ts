import {Controller, Get, Post, Body, Param,Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly svc: AbilitiesService) {}

  @Post()
  create(@Body() dto: CreateAbilityDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findOne(BigInt(id));
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAbilityDto,
  ) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
