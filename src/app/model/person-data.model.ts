import { FormControl, FormGroup } from "@angular/forms";

export interface IPersonData{
    names:string;
    lastName:string
}

export interface IPersonDataForm{
    names:FormControl<string|null>;
    lastName: FormControl<string|null>
}

export interface IStudentAdvanceForm{
    doYouNeedLunch: FormControl<boolean>,
    doYouNeedTransportToHome: FormControl<boolean>,
    areYouFreeForWeekendClasses:FormControl<boolean>,
    fatherData: FormGroup<IPersonDataForm>,
    motherData: FormGroup<IPersonDataForm>
}
export interface LoginDetails{
    username:string;
    password:string;
}