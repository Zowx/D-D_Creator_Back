import {Controller,Get,Post,Body,Param,Patch,Delete,ParseIntPipe,} from '@nestjs/common';
import { CharactersService } from '../../../core/services/character/character.service';
import { CreateCharacterDto } from '@UI/dto/character/create-character.dto';
import { UpdateCharacterDto } from '@UI/dto/character/update-character.dto';
import { Character } from '@core/models/character.model';

@Controller('characters')
export class CharactersController {
  constructor(private readonly svc: CharactersService) {}

  @Post()
  create(@Body() dto: CreateCharacterDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateCharacterDto) {
    return this.svc.update(BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.svc.remove(BigInt(id));
    return { deleted: true };
  }
}
