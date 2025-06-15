import {Controller, Get, Post, Body, Param,Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { AlignmentsService } from './alignments.service';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';

@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly svc: AlignmentsService) {}

  @Post()
  create(@Body() dto: CreateAlignmentDto) {
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
    @Body() dto: UpdateAlignmentDto,
  ) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
