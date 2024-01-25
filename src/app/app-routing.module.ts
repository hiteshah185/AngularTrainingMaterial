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
import { SearchDirectoryComponent } from './Dynamic-Search/search-directory/search-directory.component';
import { RegistrationPageComponent } from './Authorization-Authentication-Login/registration-page/registration-page.component';
import { LoginPageComponent } from './Authorization-Authentication-Login/login-page/login-page.component';
import { LandingPageComponent } from './Authorization-Authentication-Login/landing-page/landing-page.component';
import { HomePageComponent } from './Example-ngRx/home-page/home-page.component';
import { TodoComponent } from './Example-Signal/todo/todo.component';
import { SampleStudentFormComponent } from './form-advanced-04-with-unit-tests/sample-student-form/sample-student-form.component';
import { UploaderComponent } from './File-Upload/uploader/uploader.component';
import { TestFormComponent } from './form-advanced-05-with-custom-error/test-form/test-form.component';
import { EncryptionMethodsComponent } from './Crypto/encryption-methods/encryption-methods.component';
import { CanvasComponent } from './RxJs/Graphics/canvas/canvas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



export const routes: Routes = [
  {
    path: "basicStudentForm",
    component: StudentFormBasicComponent
  }, {
    path: "advanceStudentForm1",
    component: FormStudentAdvancedComponent,
  }, {
    path: "advanceStudentForm2",
    component: ValueAccessorExampleComponent
  }, {
    path: "advanceStudentForm3",
    component: FormStudentAdvanced03Component
  },
  {
    path: 'formWithCustomError',
    component: TestFormComponent
  },
  {
    path: "templateDrivenForm",
    component: SampleTemplateDrivenForm1Component
  },
  {
    path: "reactiveForm1",
    component: SampleReactiveForm1Component
  },
  {
    path: "reactiveForm2",
    component: SampleReactiveForm2Component
  },
  {
    path: "workingWithCustomServices",
    component: CustomServiceWorkingComponent
  },
  {
    path: "serviceConsumer",
    component: ServiceConsumerComponent
  },
  {
    path: "fullStackSite",
    component: FullStackSiteMainPageComponent,
  },
  {
    path: 'fakeProductListings', component: ListingPageComponent, pathMatch: 'full'
  },
  {
    path: 'fakeProductListings/:id', component: ListingDetailPageComponent
  },
  {
    path: 'contact/:id', component: ContactPageComponent
  },
  {
    path: 'formFromJson',
    component: JsonFormComponent
  },
  {
    path: 'encryption',
    component: EncryptionMethodsComponent
  },
  {
    path: 'dynamicSearch',
    component: SearchDirectoryComponent
  },
  {
    path: 'landingPage',
    component: LandingPageComponent
  },
  {
    path: 'sampleFormWithUnitTest',
    component: SampleStudentFormComponent
  },
  {
    path: 'upload',
    component: UploaderComponent
  },
  {
    path: 'ngRxHomePage',
    component: HomePageComponent
  },
  {
    path: 'ngRxEmployee',
    loadChildren: () => import('./Example-ngRx/Add-Employee/employee.module').then(mod => mod.EmployeeModule)
  },
  {
    path: 'draw',
    component: CanvasComponent
  },
  {
    path: 'todo',
    loadComponent: () => import('./Example-Signal/todo/todo.component').then((it => it.TodoComponent))
  },
  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: 'authLogin',
    component: LoginPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  }, {
    path: "securePage",
    component: SecurePageComponent,
    canActivate: [
      IdentityGuardService,
      PermissionsService
    ]
  },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [IdentityGuardService,
    PermissionsService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
