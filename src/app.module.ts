import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PdfController } from './pdf.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CharacterController, PdfController],
  providers: [AppService, CharacterService],
})
export class AppModule {}
