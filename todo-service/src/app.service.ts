import { Injectable } from '@nestjs/common';
import { tasks } from './db/db';

@Injectable()
export class AppService {
  private success = 'Success';

  add(title: string): string {
    const lastTask = tasks[tasks.length - 1];

    const newTask = {
      id: lastTask.id + 1,
      title,
    };
    tasks.push(newTask);
    return this.success;
  }

  findAll(): Array<{}> {
    return tasks;
  }

  update(id: number, title: string): string {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.title = title;
      }
    });

    return this.success;
  }

  delete(id: number): string {
    tasks.filter((task) => task.id !== id);
    return this.success;
  }
}
