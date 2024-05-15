import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { TodoComponent } from '../home/components/todo/todo.component';

@Component({
  selector: 'app-todo-favourite',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-favourite.component.html',
  styleUrl: './todo-favourite.component.scss'
})
export class TodoFavouriteComponent {
  private todoService = inject(TodoService);
  favouriteList: Todo[] = [];

  constructor() {
    this.favouriteList = this.todoService.getAllFavouriteTodos();
  }
}
