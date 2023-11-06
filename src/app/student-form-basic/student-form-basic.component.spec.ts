import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormBasicComponent } from './student-form-basic.component';

describe('StudentFormBasicComponent', () => {
  let component: StudentFormBasicComponent;
  let fixture: ComponentFixture<StudentFormBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFormBasicComponent]
    });
    fixture = TestBed.createComponent(StudentFormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
