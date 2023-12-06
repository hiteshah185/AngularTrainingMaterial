import { createAction, props } from '@ngrx/store';
import { MyStudentForm } from './sample.student.form.model';
export const actionFormUpdate = createAction(
    '[Student Form] Updated',
    props<{ form: MyStudentForm | null }>()
)

export const actionFormReset = createAction('[Student Form] Reset');