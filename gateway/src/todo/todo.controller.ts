import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { TodoDto } from './dto/todo.dto';
import { IToDoGrpcService } from './todo.grpc.interface';
import { todoMicroserviceOptions } from './todo.grpc.options';

@Controller('todo')
export class ToDoController implements OnModuleInit {
  private logger = new Logger('ToDoController');

  @Client(todoMicroserviceOptions)
  private client: ClientGrpc;

  private grpcService: IToDoGrpcService;

  onModuleInit() {
    this.grpcService =
      this.client.getService<IToDoGrpcService>('ToDoController');
  }

  @Post()
  async add(@Body() todo: TodoDto) {
    this.logger.log('Add ' + todo.toString());
    return this.grpcService.add({ title: todo.title });
  }

  @Get()
  async findAlll() {
    return this.grpcService.findAll({});
  }

  @Put(':id')
  async update(@Body() todo: TodoDto, @Param('id') id: number) {
    return this.grpcService.update({ id: id, title: todo.title });
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.grpcService.delete({ id: id });
  }
}
