import { Component, inject } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../todo.service';
import { TodoComponent } from '../components/todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  todoList: Todo[] = []
  private todoService = inject(TodoService);

  constructor() {
    this.todoList = this.todoService.getAllTodos();
  }
}
