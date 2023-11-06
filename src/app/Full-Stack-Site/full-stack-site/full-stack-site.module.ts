import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule , } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ListingPageComponent } from '../listing-page/listing-page.component';
import { FullStackSiteMainPageComponent } from '../full-stack-site-main-page/full-stack-site-main-page.component';
import { ListingDetailPageComponent } from '../listing-detail-page/listing-detail-page.component';

//Import this class in AppModule
//Import HttpClientModule in imports array
//Add routes in AppRoutingModule

@NgModule({
  declarations: [ListingPageComponent, 
    FullStackSiteMainPageComponent,
    ListingDetailPageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports:[
    ListingPageComponent,
    FullStackSiteMainPageComponent,
    ListingDetailPageComponent
  ]
})
export class FullStackSiteModule { }
