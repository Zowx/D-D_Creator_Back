import { Module } from '@nestjs/common';
import { SkillsService } from '@core/services/skill/skills.service';
import { SkillsController } from '@UI/controller/skill/skills.controller';
import { SkillRepository } from '@app/repository/skill.repository';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillsController],
  providers: [SkillsService, SkillRepository],
})
export class SkillsModule {}
