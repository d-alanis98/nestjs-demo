import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
//Configuration
import databaseConfiguration from 'config/database';
//Entities
import { User } from './application/user/User';
//Modules
import { UserModule } from './application/user/UserModule';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfiguration,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
