import {Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, BadRequestException} from '@nestjs/common';
import { LanguagesService } from '@core/services/language/languages.service';
import { CreateLanguageDto } from '@UI/dto/language/create-language.dto';
import { UpdateLanguageDto } from '@UI/dto/language/update-language.dto';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly svc: LanguagesService) {}

  @Post()
  create(@Body() dto: CreateLanguageDto) {
    return this.svc.create(dto);
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
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: UpdateLanguageDto,
  ) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
