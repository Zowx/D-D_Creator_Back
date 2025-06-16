import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { RacesService } from '@core/services/race/races.service';
import { CreateRaceDto } from '@UI/dto/race/create-race.dto';
import { UpdateRaceDto } from '@UI/dto/race/update-race.dto';

@Controller('races')
export class RacesController {
  constructor(private readonly svc: RacesService) {}

  @Post()
  async create(@Body() dto: CreateRaceDto) {
    return await this.svc.create(dto);
  }

  @Get()
  async findAll() {
    return await this.svc.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return await this.svc.findOne(BigInt(id));
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: UpdateRaceDto,
  ) {
    return await this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    await this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
