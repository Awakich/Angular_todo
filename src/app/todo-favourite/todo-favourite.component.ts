import { Component, inject } from '@angular/core';
import { TodoFavouriteListComponent } from './todo-favourite-list/todo-favourite-list.component';
import { TodoService } from '../home/todo.service';

@Component({
  selector: 'app-todo-favourite',
  standalone: true,
  imports: [TodoFavouriteListComponent],
  templateUrl: './todo-favourite.component.html',
  styleUrl: './todo-favourite.component.scss'
})
export class TodoFavouriteComponent {
  private todoService = inject(TodoService);


}
