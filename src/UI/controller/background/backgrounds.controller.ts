import {Controller, Get, Post, Body, Param,Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { BackgroundsService } from '@core/services/background/backgrounds.service';
import { CreateBackgroundDto } from '@UI/dto/background/create-background.dto';
import { UpdateBackgroundDto } from '@UI/dto/background/update-background.dto';

@Controller('backgrounds')
export class BackgroundsController {
  constructor(private readonly svc: BackgroundsService) {}

  @Post()
  create(@Body() dto: CreateBackgroundDto) {
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
    @Body() dto: UpdateBackgroundDto,
  ) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
