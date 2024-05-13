import { Component, inject } from '@angular/core';
import { TodoComponent } from '../../entities/todo/todo.component';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

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
