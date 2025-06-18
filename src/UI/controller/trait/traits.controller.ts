import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { TraitsService } from '@core/services/trait/traits.service';
import { CreateTraitDto } from '@UI/dto/trait/create-trait.dto';
import { UpdateTraitDto } from '@UI/dto/trait/update-trait.dto';

@Controller('traits')
export class TraitsController {
  constructor(private readonly svc: TraitsService) {}

  @Post()
  create(@Body() dto: CreateTraitDto) {
    const trait = dto.toCandidate();
    if (!trait) {
      throw new Error('Invalid trait data');
    }
    return this.svc.create(trait);
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
    @Body() dto: UpdateTraitDto,
  ) {
    dto.toModel = CreateTraitDto.prototype.toModel;
    const trait = dto.toModel(BigInt(id));
    return this.svc.update(trait);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}