import {Controller, Get, Post, Body, Param,Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { AlignmentsService } from '@core/services/alignment/alignments.service';
import { CreateAlignmentDto } from '@UI/dto/alignments/create-alignment.dto';
import { UpdateAlignmentDto } from '@UI/dto/alignments/update-alignment.dto';

@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly svc: AlignmentsService) {}

  @Post()
  create(@Body() dto: CreateAlignmentDto) {
    const alignment = dto.toCandidate();
    return this.svc.create(alignment);
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
    @Body() dto: UpdateAlignmentDto,
  ) {
    const alignment = dto.toModel?.(BigInt(id));
    if (!alignment) {
      throw new Error('Invalid alignment data');
    }
    return this.svc.update(alignment);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}