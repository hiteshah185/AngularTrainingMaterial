import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentAdvancedComponent } from './form-student-advanced.component';

describe('FormStudentAdvancedComponent', () => {
  let component: FormStudentAdvancedComponent;
  let fixture: ComponentFixture<FormStudentAdvancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStudentAdvancedComponent]
    });
    fixture = TestBed.createComponent(FormStudentAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
