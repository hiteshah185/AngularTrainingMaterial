import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { actionFormReset, actionFormUpdate } from '../sample.student.form.action';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
export const MyStudentForm = {

}

@Component({
  selector: 'app-sample-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    TextFieldModule],
  templateUrl: './sample-student-form.component.html',
  styleUrls: ['./sample-student-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleStudentFormComponent implements OnInit {
  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store<string>,
    private _notification: NotificationService
  ) { }

  myStudentForm = this._formBuilder.group({
    autosave: false,
    FirstName: ['', [Validators.required], { nonNullable: true }],
    LastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]
    ],
    DoB: ['', [Validators.required]]
  });

  formValueChanges$: Observable<Form> | undefined;
  routerAnimationsElement = 'route-animations-elements';
  ngOnInit() {
    this.formValueChanges$ = this.myStudentForm.valueChanges.pipe(
      filter((form: any) => form.autosave),
      tap((updatedForm) => this.update(updatedForm))
    );
  }
  save() {
    //this._store.dispatch(actionFormUpdate({ form: this.myStudentForm.value }));
  }
  update(form: Form) {
    //this._store.dispatch(actionFormUpdate({ form }));
  }
  onResetForm() {
    this.myStudentForm.reset();
    this.myStudentForm.clearValidators();
    this.myStudentForm.clearAsyncValidators();
    this._store.dispatch(actionFormReset());

  }
  onSubmit() {
    if (this.myStudentForm.valid && this.myStudentForm.get('FirstName')?.value) {
      this.save();
      this._notification.info("Form Submitted");
    }
  }


}