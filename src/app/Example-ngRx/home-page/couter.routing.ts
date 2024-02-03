import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { StoreModule } from '@ngrx/store';
import { COUNTER_STATE_NAME } from './Counter-Store/counter.selector';
import { newCounterReducer } from './Counter-Store/counter.reducers';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Counter'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME,newCounterReducer)],
    exports: [RouterModule]
})
export class CounterRoutingModule { }
