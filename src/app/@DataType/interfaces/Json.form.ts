interface JsonFormValidators{
    min?:number;
    max?:number;
    required?:boolean;
    requiredTrue?:boolean;
    email?:true;
    minLength?:boolean;
    maxLength?:boolean;
    patter?:string;
    nullValidator?:boolean
}

interface JsonFormControlOptions{
    min?:string;
    max?:string;
    step?:string;
    icon?:string;
}

export interface JsonFormControls{
    name:string;
    label:string;
    value:string;
    type:string;
    options?:JsonFormControlOptions;
    validators:JsonFormValidators
}

export interface JsonFormData{
    controls:JsonFormControls[];
}