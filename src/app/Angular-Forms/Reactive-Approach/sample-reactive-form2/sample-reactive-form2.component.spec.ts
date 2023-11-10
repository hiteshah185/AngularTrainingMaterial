import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactiveForm2Component } from './sample-reactive-form2.component';

describe('SampleReactiveForm2Component', () => {
  let component: SampleReactiveForm2Component;
  let fixture: ComponentFixture<SampleReactiveForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleReactiveForm2Component]
    });
    fixture = TestBed.createComponent(SampleReactiveForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
