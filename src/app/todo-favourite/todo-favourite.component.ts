import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoFavouriteListComponent } from '../../widgets/todo-favourite-list/todo-favourite-list.component';

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
