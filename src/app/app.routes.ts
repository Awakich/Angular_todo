import { Routes } from '@angular/router';
import { TodoFavouriteComponent } from './todo-favourite/todo-favourite.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'favourite', component: TodoFavouriteComponent, title: 'Favourite Page' },
];
