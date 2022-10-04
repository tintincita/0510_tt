import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [AuthModule, UsersModule, LoginModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
