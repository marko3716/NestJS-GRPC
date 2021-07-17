import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathModule } from './math/math.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MathModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
