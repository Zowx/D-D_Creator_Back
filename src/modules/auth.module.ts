import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from "@core/services/auth/auth.service";
import { UsersModule } from "@app/modules/users.module";
import { AuthController } from "@UI/controller/auth/auth.controller";
import { jwtConstants } from "@core/auth/constants";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
