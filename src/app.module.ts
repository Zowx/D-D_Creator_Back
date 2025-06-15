import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// Contrôleurs & Services existants
import { CharacterController } from "./UI/controller/character.controller";
import { CharacterService } from "./shared/services/character.service";

// Auth / Users / API externe
import { AuthModule } from "./shared/auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ExtApiModule } from "./ext.api/ext.api.module";

// 📦 Tous les modules métier générés précédemment
import { AbilitiesModule } from "./shared/abilities/abilities.module";
import { AlignmentsModule } from "./shared/alignments/alignments.module";
import { BackgroundsModule } from "./shared/Backgrounds/backgrounds.module";
import { ClassesModule } from "./shared/Classes/classes.module";
import { LanguagesModule } from "./shared/Languages/languages.module";
import { SkillsModule } from "./shared/skills/skills.module";
import { TraitsModule } from "./shared/traits/traits.module";
import { RacesModule } from "./shared/races/races.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ExtApiModule,

    AbilitiesModule,
    AlignmentsModule,
    BackgroundsModule,
    ClassesModule,
    LanguagesModule,
    SkillsModule,
    TraitsModule,
    RacesModule,
  ],
  controllers: [
    AppController,
    CharacterController
  ],
  providers: [
    AppService,
    CharacterService
  ],
})
export class AppModule {}
