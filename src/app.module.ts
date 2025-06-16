import { Module } from "@nestjs/common";

import { AbilitiesModule, AlignmentsModule, AuthModule, BackgroundsModule, ClassesModule, LanguagesModule, RacesModule, SkillsModule, TraitsModule, UsersModule, ExtApiModule } from "@app/modules/module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ExtApiModule,
    // DatabaseModule,

    AbilitiesModule,
    AlignmentsModule,
    BackgroundsModule,
    ClassesModule,
    LanguagesModule,
    SkillsModule,
    TraitsModule,
    RacesModule,
  ],
})
export class AppModule { }
