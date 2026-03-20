import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AModule } from './a/a.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://15.206.79.39:27017/CI-CD'),
    UsersModule,
    AdminModule,
    AModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
