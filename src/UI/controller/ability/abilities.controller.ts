import {Controller, Get, Post, Body, Param,Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { AbilitiesService } from '@core/services/ability/abilities.service';
import { CreateAbilityDto } from '@UI/dto/ability/create-ability.dto';
import { UpdateAbilityDto } from '@UI/dto/ability/update-ability.dto';

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
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.svc.findOne(BigInt(id));
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: UpdateAbilityDto,
  ) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
