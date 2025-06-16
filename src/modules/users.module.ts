import { Module } from '@nestjs/common';
import { UsersService } from '@core/services/user/users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
