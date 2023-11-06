import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ComplexFormControlModule } from './form-advanced-02/complex-form-control.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PersonDataAdvancedComponent } from './form-advanced-01/person-data-advanced/person-data-advanced.component';
import { FormStudentAdvancedComponent } from './form-advanced-01/form-student-advanced/form-student-advanced.component';
import { LoginComponent } from './login/login.component';
import { SecurePageComponent } from './secure-page/secure-page.component';
import { SampleTemplateDrivenForm1Component } from './Angular-Forms/Template-Driven/sample-template-driven-form1/sample-template-driven-form1.component';
import { FullStackSiteModule } from './Full-Stack-Site/full-stack-site/full-stack-site.module';
import { ContactPageComponent } from './Full-Stack-Site/contact-page/contact-page.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { SampleReactiveForm1Component } from './Angular-Forms/Reactive-Approach/sample-reactive-form1/sample-reactive-form1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStudentAdvancedComponent,
    LoginComponent,
    SecurePageComponent,
    SampleTemplateDrivenForm1Component,
    ContactPageComponent,
    JsonFormComponent,
    SampleReactiveForm1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ComplexFormControlModule,
    FullStackSiteModule,
    MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
    PersonDataAdvancedComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
