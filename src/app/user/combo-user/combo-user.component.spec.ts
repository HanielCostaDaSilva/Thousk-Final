import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboUserComponent } from './combo-user.component';

describe('ComboUserComponent', () => {
  let component: ComboUserComponent;
  let fixture: ComponentFixture<ComboUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboUserComponent]
    });
    fixture = TestBed.createComponent(ComboUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
