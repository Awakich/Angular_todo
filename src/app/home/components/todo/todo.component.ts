import { Component, Input, inject } from '@angular/core';
import { Todo } from '../../../interfaces/todo';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!: Todo;

  private todoService = inject(TodoService)

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id)
  }

  toggleFavouriteTodo(id: number) {
    this.todoService.toggleFavouriteTodo(id);
    this.todo.inFavourite = !this.todo.inFavourite;
  }
}
