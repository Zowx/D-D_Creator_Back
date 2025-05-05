import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CharacterController } from "./UI/controller/character.controller";
import { CharacterService } from "./shared/services/character.service";
import { AuthModule } from "./shared/auth/auth.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService],
})
export class AppModule {}
