import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MathService } from './math.service';

interface INumber {
  a: number;
  b: number;
}

interface IResult {
  result: number;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @GrpcMethod('MathController', 'Sum')
  sum(numbers: INumber, metadata: any): IResult {
    this.logger.log('Sum ' + numbers.toString());
    return { result: this.mathService.sum(numbers.a, numbers.b) };
  }

  @GrpcMethod('MathController', 'Subtraction')
  subtraction(numbers: INumber, metadata: any): IResult {
    this.logger.log('Subtraction ' + numbers.toString());
    return { result: this.mathService.subtraction(numbers.a, numbers.b) };
  }

  @GrpcMethod('MathController', 'Multiplication')
  multiplication(numbers: INumber, metadata: any): IResult {
    this.logger.log('Multiplication ' + numbers.toString());
    return { result: this.mathService.multiplication(numbers.a, numbers.b) };
  }

  @GrpcMethod('MathController', 'Divide')
  divide(numbers: INumber, metadata: any): IResult {
    this.logger.log('Divide ' + numbers.toString());
    return { result: this.mathService.divide(numbers.a, numbers.b) };
  }
}
