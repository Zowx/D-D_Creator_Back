import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClassesService } from '@core/services/class/classes.service';
import { CreateClassDto } from '@UI/dto/class/create-class.dto';
import { UpdateClassDto } from '@UI/dto/class/update-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly svc: ClassesService) {}

  @Post()
  async create(@Body() dto: CreateClassDto) {
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
    @Body() dto: UpdateClassDto,
  ) {
    return await this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    await this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
