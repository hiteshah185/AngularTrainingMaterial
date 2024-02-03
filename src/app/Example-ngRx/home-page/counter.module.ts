import { HomePageComponent } from './home-page.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { CounterRoutingModule } from "./couter.routing";
import { SharedModule } from 'src/app/Shared/shared/shared.module';

export const sharedComponents = [
    HomePageComponent
]

@NgModule({
    declarations: [
        sharedComponents,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        CounterRoutingModule,
        SharedModule

    ],
    exports: [
        sharedComponents
    ],
    providers: []
})
export class CounterModule { }
