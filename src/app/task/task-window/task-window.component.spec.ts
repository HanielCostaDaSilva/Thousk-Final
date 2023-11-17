import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskWindowComponent } from './task-window.component';

describe('TaskWindowComponent', () => {
  let component: TaskWindowComponent;
  let fixture: ComponentFixture<TaskWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskWindowComponent]
    });
    fixture = TestBed.createComponent(TaskWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
