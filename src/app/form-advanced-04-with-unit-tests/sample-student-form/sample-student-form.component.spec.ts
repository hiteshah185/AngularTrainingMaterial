import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleStudentFormComponent } from './sample-student-form.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SampleStudentFormComponent', () => {
  let component: SampleStudentFormComponent;
  let fixture: ComponentFixture<SampleStudentFormComponent>;
  let dispatchSpy: jasmine.Spy;
  let store: MockStore;
  let loader: HarnessLoader;
  const getInput = (fieldName: string) =>
    loader.getHarness(
      MatInputHarness.with({ selector: `[formControlName="${fieldName}"]` })
    );
  const getSaveButton = () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'Save' })
    );
  const getResetButton = async () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'Reset' })
    )

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleStudentFormComponent]
    });
    fixture = TestBed.createComponent(SampleStudentFormComponent);
    store.overrideSelector(selectFormState, { form: {} as Form });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
