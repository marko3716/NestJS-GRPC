import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface MessageResponse {
  message: string;
}

interface ToDoResponse {
  items: ToDo[];
}

interface ToDo {
  id?: number;
  title?: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('ToDoController', 'Add')
  add(todo: ToDo, metadata: any): MessageResponse {
    return { message: this.appService.add(todo.title) };
  }

  @GrpcMethod('ToDoController', 'FindAll')
  findAlls(todo: {}, metadata: any): ToDoResponse {
    return { items: this.appService.findAll() };
  }

  @GrpcMethod('ToDoController', 'Update')
  update(todo: ToDo, metadata: any): MessageResponse {
    return { message: this.appService.update(todo.id, todo.title) };
  }

  @GrpcMethod('ToDoController', 'Delete')
  delete(todo: ToDo, metadata: any): MessageResponse {
    return { message: this.appService.delete(todo.id) };
  }
}
