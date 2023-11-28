import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { SampleReactiveForm2Component } from './Angular-Forms/Reactive-Approach/sample-reactive-form2/sample-reactive-form2.component';
import { CustomServiceWorkingComponent } from './Dependency-Injection/custom-service-working/custom-service-working.component';
import { ServiceConsumerComponent } from './Dependency-Injection/service-consumer/service-consumer.component';
import { LoggingService } from './services/logging.service';
import { SearchItemPipe } from './Custom-Pipes/array/search-item.pipe';
import { SearchDirectoryComponent } from './Dynamic-Search/search-directory/search-directory.component';
import { SearchItemComponent } from './Dynamic-Search/search-item/search-item.component';
import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { HomePageComponent } from './Example-ngRx/home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, movieReducer } from './Example-ngRx/Reducers/movie.reducers';
import { MovieListComponent } from './Example-ngRx/movie-list/movie-list.component';
import { LoginPageComponent } from './Authorization-Authentication-Login/login-page/login-page.component';
import { MaterialModule } from './material.module';

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
    SampleReactiveForm2Component,
    CustomServiceWorkingComponent,
    ServiceConsumerComponent,
    SearchItemPipe,
    SearchDirectoryComponent,
    SearchItemComponent,
    HomePageComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ComplexFormControlModule,
    FullStackSiteModule,
    ReactiveFormsModule,
    PersonDataAdvancedComponent,
    StoreModule.forRoot({count:counterReducer}),
    MaterialModule
  ],
  providers: [{ provide: 'LOG_SERVICE', useClass: LoggingService }, CustomErrorHandlerService,
  { provide: ErrorHandler, useClass: CustomErrorHandlerService }],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
