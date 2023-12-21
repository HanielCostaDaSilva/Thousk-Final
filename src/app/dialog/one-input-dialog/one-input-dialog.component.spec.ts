import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInputDialogComponent } from './one-input-dialog.component';

describe('OneInputDialogComponent', () => {
  let component: OneInputDialogComponent;
  let fixture: ComponentFixture<OneInputDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneInputDialogComponent]
    });
    fixture = TestBed.createComponent(OneInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
