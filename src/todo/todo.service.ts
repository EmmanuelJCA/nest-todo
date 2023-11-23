import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dtos/inputs/create-todo.input';

@Injectable()
export class TodoService {
  private todos = [
    {
      id: 1,
      title: 'Gema del Alma',
      description: 'Ir a vormir',
      done: false,
    },
    {
      id: 2,
      title: 'Gema del Espacio',
      description: 'Ir a la torre de los vengadores',
      done: true,
    },
    {
      id: 3,
      title: 'Gema del poder',
      description: 'Ir a morag',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) throw new Error('Todo not found');

    return todo;
  }

  create(createTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();

    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1;
    todo.title = createTodoInput.title;
    todo.description = createTodoInput.description;

    this.todos.push(todo);

    return todo;
  }
}
