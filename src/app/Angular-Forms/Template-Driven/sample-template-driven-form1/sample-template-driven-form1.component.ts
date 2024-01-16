import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SampleTemplateModel } from '../../sample-template-model';

@Component({
  selector: 'app-sample-template-driven-form1',
  templateUrl: './sample-template-driven-form1.component.html',
  styleUrls: ['./sample-template-driven-form1.component.scss']
})
export class SampleTemplateDrivenForm1Component {
  public newModelForm = new SampleTemplateModel("Teranet","learning@tearnet.ca","Where is our HQ?","Teranet@Nov2023");
  public isSubmitted:boolean = false;
  public defaultUserName:string ="";
  public toggleQuestions:string[] = ['Yes.','No.'];
  public formData:SampleTemplateModel ={
    username:'',
    email:'',
    secretQuestion:'',
  }



  onSubmit(form: NgForm){
    console.log("Form Submitted:",form);
    console.log("Form Value:",form.value.username);
    this.defaultUserName="A new Form Username"
    // this.formData.username= form.value.childmodelGroup.newusername;
    // this.isSubmitted= true;
  }



  onReset(){

  }
}