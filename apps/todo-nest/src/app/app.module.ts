import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'todo',
      synchronize: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([UserEntity]),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
