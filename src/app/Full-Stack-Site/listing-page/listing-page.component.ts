import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FakeProduct } from '../fake-apimodels';
import { FakeAPIStoreService } from '../fake-apistore.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit{
  public productList$!:Observable<FakeProduct[]>;
  constructor(private fakeAPIService: FakeAPIStoreService){}
  loadProductData(){
    this.productList$ = this.fakeAPIService.getProductListings()
  }
  ngOnInit(): void {
      this.loadProductData();
  }
}
