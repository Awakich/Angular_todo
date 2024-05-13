import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoFavouriteComponent } from './pages/todo-favourite/todo-favourite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'favourite', component: TodoFavouriteComponent, title: 'Favourite Page' },
];
