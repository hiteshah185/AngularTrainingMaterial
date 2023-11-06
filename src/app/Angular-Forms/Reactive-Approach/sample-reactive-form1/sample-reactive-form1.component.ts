import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from '@angular/forms'
import { EmailValidatorService } from 'src/app/Custom-Validators/email-validator.service';
import { CustomValidators } from 'src/app/Custom-Validators/noSpaceAllowed.validator';
@Component({
  selector: 'app-sample-reactive-form1',
  templateUrl: './sample-reactive-form1.component.html',
  styleUrls: ['./sample-reactive-form1.component.scss']
})
export class SampleReactiveForm1Component implements OnInit{
  

  signupForm!: FormGroup;
  questions: string[] = ['Yes','No'];
  allowedUserName = ['Admin','Staff'];

  ngOnInit(){
    this.buildForm();

  }

  buildForm(){
    // this.signupForm = new FormGroup({
    //   'username': new FormControl('user1',[Validators.required,  this.allowedUser.bind(this)]),
    //   'email':new FormControl('abcteranet',[Validators.required,Validators.email,EmailValidatorService.required()]),
    //   'question': new FormControl('Yes')
    // });
    this.signupForm = new FormGroup({
      'controlGroup': new FormGroup({
        'username': new FormControl('DefaultUser',[Validators.required,  this.allowedUser.bind(this)]),
      'email':new FormControl('abcteranet',[Validators.required,Validators.email]),
      }),
      'question': new FormControl('Yes')
    });
  }

  allowedUser(control:FormControl):{[str:string]:boolean} |null{
    if(this.allowedUserName.indexOf(control.value)==-1){
      return {'validated':true};
    }
    return null;
  }
  // this.allowedUser.bind(this)


  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
 

}
