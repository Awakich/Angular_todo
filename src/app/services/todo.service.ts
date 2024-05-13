import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Todo[] = []
  favouriteList: Todo[] = []

  getAllTodos(): Todo[] {
    return this.todoList;
  }

  addTodo(todo: Todo) {
    this.todoList.push(todo)
  }

  toggleTodo(id: number) {
    const findTodo = this.todoList.find((todo) => todo.id === id)!;
    findTodo.completed = !findTodo.completed;
  }

  getAllFavouriteTodos() {
    return this.favouriteList;
  }

  toggleFavouriteTodo(id: number) {
    const findTodo = this.todoList.find(item => item.id === id);
    if (findTodo) {
      const index = this.favouriteList.findIndex(item => item.id === id);
      if (index === -1) {
        this.favouriteList.push(findTodo);
      } else {
        this.favouriteList.splice(index, 1);
      }

    }
  }
}
