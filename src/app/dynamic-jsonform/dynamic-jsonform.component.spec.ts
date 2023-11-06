import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicJSONFormComponent } from './dynamic-jsonform.component';

describe('DynamicJSONFormComponent', () => {
  let component: DynamicJSONFormComponent;
  let fixture: ComponentFixture<DynamicJSONFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicJSONFormComponent]
    });
    fixture = TestBed.createComponent(DynamicJSONFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
