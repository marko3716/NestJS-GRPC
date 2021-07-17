import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { MathDto } from 'src/math/dto/math.dto';
import { IMathGrpcService } from './math.grpc.interface';
import { mathMicroserviceOptions } from './math.grpc.otpions';

@Controller('math')
export class MathController implements OnModuleInit {
  private logger = new Logger('MathController');

  @Client(mathMicroserviceOptions)
  private client: ClientGrpc;

  private grpcService: IMathGrpcService;

  onModuleInit() {
    this.grpcService =
      this.client.getService<IMathGrpcService>('MathController');
  }

  @Post('sum')
  async sum(@Body() mathDto: MathDto) {
    this.logger.log('Sum ' + mathDto.toString());
    return this.grpcService.sum({ a: mathDto.a, b: mathDto.b });
  }

  @Post('subtraction')
  async subtraction(@Body() mathDto: MathDto) {
    this.logger.log('Subtraction ' + mathDto.toString());
    return this.grpcService.subtraction({ a: mathDto.a, b: mathDto.b });
  }

  @Post('multiplication')
  async multiplication(@Body() mathDto: MathDto) {
    this.logger.log('Multiplication ' + mathDto.toString());
    return this.grpcService.multiplication({ a: mathDto.a, b: mathDto.b });
  }

  @Post('divide')
  async divide(@Body() mathDto: MathDto) {
    this.logger.log('Divide ' + mathDto.toString());
    return this.grpcService.divide({ a: mathDto.a, b: mathDto.b });
  }
}
