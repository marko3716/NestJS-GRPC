import { Observable } from 'rxjs';

export interface IToDoGrpcService {
  add(todo: ITodo): Observable<any>;
  findAll({}): Observable<any>;
  update(todo: ITodo): Observable<any>;
  delete(todo: ITodo): Observable<any>;
}

interface ITodo {
  id?: number;
  title?: string;
}
