import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const mathMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'math',
    url: '0.0.0.0:5001',
    protoPath: join(__dirname, './math.proto'),
  },
};
