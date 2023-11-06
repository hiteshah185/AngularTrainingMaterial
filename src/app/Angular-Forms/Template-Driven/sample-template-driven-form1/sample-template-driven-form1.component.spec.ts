import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTemplateDrivenForm1Component } from './sample-template-driven-form1.component';

describe('SampleTemplateDrivenForm1Component', () => {
  let component: SampleTemplateDrivenForm1Component;
  let fixture: ComponentFixture<SampleTemplateDrivenForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTemplateDrivenForm1Component]
    });
    fixture = TestBed.createComponent(SampleTemplateDrivenForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
