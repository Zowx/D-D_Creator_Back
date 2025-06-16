import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service';
import { CreateRaceDto } from '@UI/dto/race/create-race.dto';
import { UpdateRaceDto } from '@UI/dto/race/update-race.dto';

@Controller('races')
export class RacesController {
  constructor(private readonly svc: RacesService) {}

  @Post()
  create(@Body() dto: CreateRaceDto) {
    const race = dto.toCandidate();
    return this.svc.create(race);
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
    @Body() dto: UpdateRaceDto,
  ) {
    const race = dto.toModel?.(BigInt(id));
    if (!race) {
      throw new Error('Invalid race data');
    }
    return this.svc.update(race);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}