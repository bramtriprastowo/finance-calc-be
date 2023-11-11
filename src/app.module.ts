import { Module } from '@nestjs/common';
import { UserModule } from './services/user/user.module';
import { DatabaseModule } from './configs/database/database.module';
import { AuthModule } from './services/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './services/auth/jwt/jwt.guard';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule {}
