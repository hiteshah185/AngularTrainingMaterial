import { FakeProduct } from './../../Full-Stack-Site/fake-apimodels';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { concatMap, map, mergeMap, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplierURL = 'https://fakestoreapi.com/products'
  constructor(
    private _http: HttpClient
  ) {
    // this.supplierWithConcatMap$.subscribe(item => console.log('concatMap Result:', item));
    // this.suppliersWithMergeMap$.subscribe(item => console.log('mergeMap Result:', item));

    // this.suppliersWithSwitchMap$.subscribe(item => console.log('switchMap result', item));
  }

  supplierWithMap$ = of(3, 6, 9)
    .pipe(map(id => this._http.get<FakeProduct>(`${this.supplierURL}/${id}`))
    );

  supplierWithConcatMap$ = of(3, 6, 9)
    .pipe(
      tap(id => console.log('concatMap source Observable', id)),
      concatMap(id => this._http.get<FakeProduct>(`${this.supplierURL}/${id}`)
      ));
  suppliersWithMergeMap$ = of(3, 6, 9)
    .pipe(
      tap(id => console.log('mergeMap source Observable', id)),
      mergeMap(id => this._http.get<FakeProduct>(`${this.supplierURL}/${id}`))
    );
  suppliersWithSwitchMap$ = of(3, 6, 9)
    .pipe(
      tap(id => console.log('switchMap source Observable', id)),
      switchMap(id => this._http.get<FakeProduct>(`${this.supplierURL}/${id}`))
    );


}
