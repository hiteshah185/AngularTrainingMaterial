export interface MyStudentForm {
    autosave: boolean;
    FirstName: string,
    LastName: string,
    email: string,
    description: string,
    DoB: Date
}
export interface MyStudentFormState {
    form: MyStudentForm;
}