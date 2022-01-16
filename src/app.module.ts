import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
//Configuration
import databaseConfiguration from 'config/database';
//Modules
import { UserModule } from './application/users/UserModule';


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
