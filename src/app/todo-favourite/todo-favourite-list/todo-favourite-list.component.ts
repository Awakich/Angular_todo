import { Component, inject } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../home/todo.service';
import { TodoComponent } from '../../home/components/todo/todo.component';

@Component({
  selector: 'app-todo-favourite-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-favourite-list.component.html',
  styleUrl: './todo-favourite-list.component.scss'
})
export class TodoFavouriteListComponent {
  favouriteList: Todo[] = [];

  private todoService = inject(TodoService);

  constructor() {
    this.favouriteList = this.todoService.getAllFavouriteTodos()
  }
}
