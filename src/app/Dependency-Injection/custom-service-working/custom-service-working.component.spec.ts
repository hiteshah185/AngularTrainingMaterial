import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomServiceWorkingComponent } from './custom-service-working.component';

describe('CustomServiceWorkingComponent', () => {
  let component: CustomServiceWorkingComponent;
  let fixture: ComponentFixture<CustomServiceWorkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomServiceWorkingComponent]
    });
    fixture = TestBed.createComponent(CustomServiceWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
