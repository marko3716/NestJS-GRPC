import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  sum(a: number, b: number): number {
    return a + b;
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
