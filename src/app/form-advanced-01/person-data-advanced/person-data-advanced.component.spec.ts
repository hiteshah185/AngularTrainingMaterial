import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataAdvancedComponent } from './person-data-advanced.component';

describe('PersonDataAdvancedComponent', () => {
  let component: PersonDataAdvancedComponent;
  let fixture: ComponentFixture<PersonDataAdvancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDataAdvancedComponent]
    });
    fixture = TestBed.createComponent(PersonDataAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
