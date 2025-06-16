import { Module } from '@nestjs/common';
import { SkillsService } from '@core/services/skill/skills.service';
import { SkillsController } from '@UI/controller/skill/skills.controller';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
