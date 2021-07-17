import { Module } from '@nestjs/common';
import { ToDoController } from './todo.controller';

@Module({
  controllers: [ToDoController],
})
export class TodoModule {}
