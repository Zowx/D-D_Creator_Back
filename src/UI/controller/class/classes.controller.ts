import {Controller, Get, Post, Patch, Delete,Body, Param, ParseIntPipe} from '@nestjs/common';
import { ClassesService } from '@core/services/class/classes.service';
import { CreateClassDto } from '@UI/dto/class/create-class.dto';
import { UpdateClassDto } from '@UI/dto/class/update-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly svc: ClassesService) {}

  @Post()
  create(@Body() dto: CreateClassDto) {
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
    @Body() dto: UpdateClassDto,
  ) {
    const classData = dto.toModel?.(BigInt(id));
    if (!classData) {
      throw new Error('Invalid class data');
    }
    return this.svc.update(classData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
