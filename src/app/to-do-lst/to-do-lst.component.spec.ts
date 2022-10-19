import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLstComponent } from './to-do-lst.component';

describe('ToDoLstComponent', () => {
  let component: ToDoLstComponent;
  let fixture: ComponentFixture<ToDoLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoLstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
