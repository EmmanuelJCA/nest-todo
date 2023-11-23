import { Injectable } from '@nestjs/common';

import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';

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

  get totalTodos(): number {
    return this.todos.length;
  }

  get completedTodos(): number {
    return this.findAll({ status: true }).length;
  }

  get pendingTodos(): number {
    return this.findAll({ status: false }).length;
  }

  findAll(statusArgs: StatusArgs): Todo[] {
    const { status } = statusArgs;
    if (status !== undefined)
      return this.todos.filter((todo) => todo.done === status);

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

  update(id: number, updateTodoInput: UpdateTodoInput): Todo {
    const { title, description, done } = updateTodoInput;

    const todoToUpdate = this.findOne(id);

    if (title) todoToUpdate.title = title;
    if (description) todoToUpdate.description = description;
    if (done !== undefined) todoToUpdate.done = done;

    this.todos = this.todos.map((todo) => {
      if (todo.id === id) return todoToUpdate;
      return todo;
    });

    return todoToUpdate;
  }

  remove(id: number): boolean {
    const todoToRemove = this.findOne(id);
    this.todos = this.todos.filter((todo) => todo.id !== todoToRemove.id);

    return true;
  }
}
