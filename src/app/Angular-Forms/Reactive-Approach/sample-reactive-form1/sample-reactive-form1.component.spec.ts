import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactiveForm1Component } from './sample-reactive-form1.component';

describe('SampleReactiveForm1Component', () => {
  let component: SampleReactiveForm1Component;
  let fixture: ComponentFixture<SampleReactiveForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleReactiveForm1Component]
    });
    fixture = TestBed.createComponent(SampleReactiveForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
