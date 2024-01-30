import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatestWith, concatMap, map, merge, Observable, of, shareReplay, tap, throwError, } from 'rxjs';
import { Action, ProductCategory, TeraMallProduct } from 'src/app/@DataType/interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class TeraProductService {

  private teraProductURL = 'api/products';
  private categoriesURL = 'api/productCategories'
  private emptyProduct!: TeraMallProduct;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private productsSubject = new BehaviorSubject<TeraMallProduct[]>([]);
  public product$ = this.productsSubject.asObservable();

  private productModifiedSubject = new BehaviorSubject<Action<TeraMallProduct>>({
    item: this.emptyProduct,
    action: 'none'
  });
  public productModifiedAction$ = this.productModifiedSubject.asObservable();
  constructor(
    private _http: HttpClient
  ) { }
  productsWithCRUD$ = merge(
    this.product$,
    this.productModifiedAction$
      .pipe(
        concatMap(operation => this.saveProduct(operation)),
        concatMap(() => this.getTeraProducts())
      ));

  private getTeraProducts(multiplier: number = 1): Observable<TeraMallProduct[]> {
    return this._http.get<TeraMallProduct[]>(`${this.teraProductURL}/all`)
      .pipe(combineLatestWith(this.productCategories$),
        map(([tProducts, categories]) =>
          tProducts.map(product => ({
            ...product,
            price: product.price ? product.price * multiplier : 0,
            category: categories.find(c => product.categoryId === c.id)?.name,
            searchKey: [product.productName]
          } as TeraMallProduct))
        ),
        tap(productWithCategories => this.productsSubject.next(productWithCategories)),
        tap(data => console.log('Product Details:', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  private productCategories$ = this._http.get<ProductCategory[]>(this.categoriesURL)
    .pipe(
      tap(data => console.log('categories-from-API', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    );

  private saveProduct(operation: Action<TeraMallProduct>): Observable<Action<TeraMallProduct>> {
    const teraProduct = operation.item;
    console.log('Save-Product:', JSON.stringify(teraProduct));
    const url = `${this.teraProductURL}/${teraProduct.id}`;
    switch (operation.action) {
      case 'add':
        return this._http.post<TeraMallProduct>(this.teraProductURL, { ...teraProduct, id: null }, { headers: this.headers })
          .pipe(
            map(product => ({ item: product, action: operation.action })),
            catchError(this.handleError)
          );

      case 'update':
        return this._http.put<TeraMallProduct>(url, teraProduct, { headers: this.headers })
          .pipe(
            map(product => ({ item: product, action: operation.action })),
            catchError(this.handleError)
          );

      case 'delete':
        return this._http.delete<TeraMallProduct>(url, { headers: this.headers })
          .pipe(
            map(() => ({ item: teraProduct, action: operation.action })),
            catchError(this.handleError)
          );

      case 'none':
        return of(operation);
      default: return of(operation);
    }
  }
  public addANewProduct(newProduct?: TeraMallProduct): void {
    newProduct = newProduct || this.emptyProduct;
    this.productModifiedSubject.next({
      item: newProduct,
      action: 'add'
    });
  }
  public deleteProduct(product: TeraMallProduct): void {
    this.productModifiedSubject.next({
      item: product,
      action: 'delete'
    });
  }
  public updateProduct(updProduct: TeraMallProduct): void {
    const updatedProduct = {
      ...updProduct,
      quantityInStock: updProduct.quantityInStock ? updProduct.quantityInStock + 1 : 1
    } as TeraMallProduct;
    this.productModifiedSubject.next({
      item: updatedProduct,
      action: 'update'
    })
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

}
