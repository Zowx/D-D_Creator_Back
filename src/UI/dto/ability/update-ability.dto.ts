import { PartialType } from '@nestjs/mapped-types';
import { CreateAbilityDto } from './create-ability.dto';
import { AbilityCandidate } from '@app/core/models/ability.model';

export class UpdateAbilityDto extends PartialType(CreateAbilityDto) {}
