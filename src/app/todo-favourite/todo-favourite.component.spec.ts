import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFavouriteComponent } from './todo-favourite.component';

describe('TodoFavouriteComponent', () => {
  let component: TodoFavouriteComponent;
  let fixture: ComponentFixture<TodoFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFavouriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
