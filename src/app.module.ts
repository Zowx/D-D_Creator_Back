import { Module } from "@nestjs/common";

import { AbilitiesModule, AlignmentsModule, AuthModule, BackgroundsModule, ClassesModule, LanguagesModule, RacesModule, SkillsModule, TraitsModule, UsersModule, ExtApiModule, DatabaseModule } from "@app/modules/module";
import { ImportModule } from "./modules/import.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ExtApiModule,
    DatabaseModule,

    AbilitiesModule,
    AlignmentsModule,
    BackgroundsModule,
    ClassesModule,
    LanguagesModule,
    SkillsModule,
    TraitsModule,
    RacesModule,
    ImportModule,
  ],
})
export class AppModule { }
