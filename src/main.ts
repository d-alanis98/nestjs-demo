import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import EnvironmentLoader from './infrastructure/environment/EnvironmentLoader';

new EnvironmentLoader().load();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
