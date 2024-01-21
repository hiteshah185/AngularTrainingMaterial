import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export interface MyUserForm {
    firstName: string;
    email: string;
    contact: number;
    dateOfJoining: Date
}

export type PartialUserForm = {
    [field in keyof Partial<MyUserForm>]: FormControl<MyUserForm[field] | null>;
}

//Generic Omitted Type
export type Omit<T, K extends string | number> = {
    [P in Exclude<keyof T, K>]: T[P];
};

export type OmittedUserForm = {
    [field in keyof Omit<MyUserForm, "dateOfJoining">]: FormControl<MyUserForm[field] | null>;
};

class TypedFormsExamples {
    private _formBuilder = inject(FormBuilder);

    userForm: FormGroup = this._formBuilder.group<MyUserForm | {}>({
        firstName: new FormControl('Ronald'),
        email: new FormControl("ronald23@mail.com"),
        contact: new FormControl(13324424),
        dateOfJoining: new FormControl(new Date())
    });
    //All fields are mandatory here

    newPartialUserForm = this._formBuilder.group<PartialUserForm>({
        firstName: new FormControl("Gandhi"),
        email: new FormControl("")
    }); //Partial Form - from MyUserForm Interface

    newOmittedUserForm = this._formBuilder.group<OmittedUserForm>({
        firstName: new FormControl("Charles"),
        email: new FormControl("charlestheking@mail.uk"),
        contact: new FormControl(2468941),
    }); // Omitted Form - field specific omission from MyUserForm

}

// Read more :
// https://medium.com/@borjamrd1/type-your-formgroups-in-angular-in-three-different-ways-707c289640b1