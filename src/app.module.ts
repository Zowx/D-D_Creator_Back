import { Module } from "@nestjs/common";

import { ImportModule, AbilitiesModule, AlignmentsModule, AuthModule, BackgroundsModule, ClassesModule, LanguagesModule, RacesModule, SkillsModule, TraitsModule, UsersModule, ExtApiModule, DatabaseModule, CharactersModule } from "@app/modules/module";

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
    CharactersModule,
    LanguagesModule,
    SkillsModule,
    TraitsModule,
    RacesModule,
    ImportModule,
  ],
})
export class AppModule { }
