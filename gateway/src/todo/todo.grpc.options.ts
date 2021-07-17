import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const todoMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'todo',
    url: '0.0.0.0:5000',
    protoPath: join(__dirname, './todo.proto'),
  },
};
