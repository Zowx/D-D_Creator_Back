import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { AbilitiesModule, AlignmentsModule, AuthModule, BackgroundsModule, ClassesModule, LanguagesModule, RacesModule, SkillsModule, TraitsModule, UsersModule, ExtApiModule } from "@app/modules/module";

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
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
