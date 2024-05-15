import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private todoService = inject(TodoService)
  title: string = '';
  description: string = '';
  todoList: Todo[] = []

  constructor() {
    this.todoList = this.todoService.getAllTodos();
  }

  addTodo(title: string, description?: string) {
    if (!title.trim().length) return;

    const todo: Todo = {
      id: +Date.now().toFixed(0),
      title: title,
      description: description,
      completed: false,
      inFavourite: false
    }
    this.todoService.addTodo(todo)

    this.title = '';
    this.description = '';
  }
}
