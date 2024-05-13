import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../../widgets/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private todoService = inject(TodoService)
  title: string = '';
  description: string = '';

  constructor() { }

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
