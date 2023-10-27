import { Module } from '@nestjs/common';
import { UserModule } from './services/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './configs/database/database.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UserModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
