import { Observable } from 'rxjs';

export interface IMathGrpcService {
  sum(numbers: INumber): Observable<any>;
  subtraction(numbers: INumber): Observable<any>;
  multiplication(numbers: INumber): Observable<any>;
  divide(numbers: INumber): Observable<any>;
}

interface Message {
  context: string;
}

interface INumber {
  a: number;
  b: number;
}
