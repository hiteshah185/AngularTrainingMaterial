import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormBasicComponent } from './student-form-basic/student-form-basic.component';
import { FormStudentAdvancedComponent } from './form-advanced-01/form-student-advanced/form-student-advanced.component';
import { ValueAccessorExampleComponent } from './form-advanced-02/value-accessor-example/value-accessor-example.component';
import { FormStudentAdvanced03Component } from './form-advanced-03/form-student-advanced03/form-student-advanced03.component';
import { IdentityGuardService } from './services/guards/identity-guard.service';
import { PermissionsService } from './services/guards/permissions-service';
import { LoginComponent } from './login/login.component';
import { SecurePageComponent } from './secure-page/secure-page.component';
import { SampleTemplateDrivenForm1Component } from './Angular-Forms/Template-Driven/sample-template-driven-form1/sample-template-driven-form1.component';
import { ListingPageComponent } from './Full-Stack-Site/listing-page/listing-page.component';
import { FullStackSiteMainPageComponent } from './Full-Stack-Site/full-stack-site-main-page/full-stack-site-main-page.component';
import { ListingDetailPageComponent } from './Full-Stack-Site/listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './Full-Stack-Site/contact-page/contact-page.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { SampleReactiveForm1Component } from './Angular-Forms/Reactive-Approach/sample-reactive-form1/sample-reactive-form1.component';
import { SampleReactiveForm2Component } from './Angular-Forms/Reactive-Approach/sample-reactive-form2/sample-reactive-form2.component';
import { CustomServiceWorkingComponent } from './Dependency-Injection/custom-service-working/custom-service-working.component';
import { ServiceConsumerComponent } from './Dependency-Injection/service-consumer/service-consumer.component';


const routes: Routes = [
  {
    path:"basicStudentForm",
    component:StudentFormBasicComponent
  },{
    path:"advanceStudentForm1",
    component:FormStudentAdvancedComponent,
  },{
    path:"advanceStudentForm2",
    component: ValueAccessorExampleComponent
  },{
    path:"advanceStudentForm3",
    component:FormStudentAdvanced03Component
  },
  {
    path:"templateDrivenForm",
    component:SampleTemplateDrivenForm1Component
  },
  {
    path:"reactiveForm1",
    component:SampleReactiveForm1Component
  },
  {
    path:"reactiveForm2",
    component:SampleReactiveForm2Component
  },
  {
    path:"workingWithCustomServices",
    component:CustomServiceWorkingComponent
  },
  {
    path: "serviceConsumer",
    component:ServiceConsumerComponent
  },
  {
    path:"fullStackSite",
    component:FullStackSiteMainPageComponent,
  },
  {
    path:'fakeProductListings',component:ListingPageComponent,pathMatch:'full'
  }, 
  {
    path: 'fakeProductListings/:id',component:ListingDetailPageComponent
  },
  {
    path:'contact/:id',component:ContactPageComponent
  },
  {
    path:'formFromJson',
    component:JsonFormComponent
  },
  {
    path:"login",
    component:LoginComponent
  },{
    path:"securePage",
    component:SecurePageComponent,
    canActivate:[
      IdentityGuardService,
      PermissionsService
    ]
  },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[IdentityGuardService,
    PermissionsService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
