import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateBackgroundDto } from '../../dto/background/create-background.dto';
import { BackgroundService } from '../../../core/services/background/backgrounds.service';
import { Background } from '@app/core/models/background.model';
import { UpdateBackgroundDto } from '@app/UI/dto/background/update-background.dto';

@Controller('backgrounds')
export class BackgroundController {
  constructor(private readonly backgroundService: BackgroundService) {}

  @Post()
  async create(@Body() createDto: CreateBackgroundDto): Promise<Background> {
    const candidate = createDto.toCandidate();
    return this.backgroundService.create(candidate);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Background> {
    return this.backgroundService.findOne(BigInt(id));
  }

  @Get()
  async findAll(): Promise<Background[]> {
    return this.backgroundService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBackgroundDto,
  ): Promise<Background> {
    if (typeof updateDto.toModel !== 'function') {
      throw new Error('updateDto.toModel is undefined');
    }
    const model = updateDto.toModel(BigInt(id));
    return this.backgroundService.update(model);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.backgroundService.remove(BigInt(id));
  }
}
