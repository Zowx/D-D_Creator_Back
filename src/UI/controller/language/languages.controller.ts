import {Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, BadRequestException} from '@nestjs/common';
import { LanguagesService } from '@core/services/language/languages.service';
import { CreateLanguageDto } from '@UI/dto/language/create-language.dto';
import { UpdateLanguageDto } from '@UI/dto/language/update-language.dto';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly svc: LanguagesService) {}

  @Post()
  create(@Body() dto: CreateLanguageDto) {
    const language = dto.toCandidate();
    
    return this.svc.create(language);
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
    @Param('id') id: string,
    @Body() dto: UpdateLanguageDto,
  ) {
    const language = dto.toModel?.(BigInt(id));
    if (!language) {
      throw new BadRequestException('Invalid language data');
    }
    return this.svc.update(language);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}