import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'todo',
    url: '0.0.0.0:5000',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => {
    logger.log('Microservice is listening ...');
  });
}
bootstrap();
