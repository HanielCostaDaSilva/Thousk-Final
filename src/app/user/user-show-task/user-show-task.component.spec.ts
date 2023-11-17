import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowTaskComponent } from './user-show-task.component';

describe('UserShowTaskComponent', () => {
  let component: UserShowTaskComponent;
  let fixture: ComponentFixture<UserShowTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserShowTaskComponent]
    });
    fixture = TestBed.createComponent(UserShowTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
