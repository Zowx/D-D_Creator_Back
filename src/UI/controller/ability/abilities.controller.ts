import {Controller,Get,Post,Body,Param,Patch,Delete,} from '@nestjs/common';
import { AbilitiesService } from '@core/services/ability/abilities.service';
import { CreateAbilityDto } from '@UI/dto/ability/create-ability.dto';
import { UpdateAbilityDto } from '@UI/dto/ability/update-ability.dto';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly svc: AbilitiesService) {}

  @Post()
  create(@Body() dto: CreateAbilityDto) {
    const ability = dto.toCandidate();
    return this.svc.create(ability);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(BigInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAbilityDto) {
    if (typeof dto.toModel !== 'function') {
      throw new Error('dto.toModel is not defined');
    }
    const ability = dto.toModel(BigInt(id));

    return this.svc.update(ability);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
