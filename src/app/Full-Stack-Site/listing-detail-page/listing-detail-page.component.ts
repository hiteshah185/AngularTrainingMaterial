import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeAPIStoreService } from '../fake-apistore.service';
import { FakeProduct } from '../fake-apimodels';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss']
})
export class ListingDetailPageComponent implements OnInit{
  isLoading:boolean = true;
  productList!:FakeProduct;
  constructor(private _route: ActivatedRoute,
    private _fakeAPIService:FakeAPIStoreService){}


    ngOnInit():void{
      this._fakeAPIService.getProductsById(this.getRouteId())
      .subscribe(item=>{
        this.productList = item;
        this.isLoading = false;
      });
    }

    getRouteId():any{
      return this._route.snapshot.paramMap.get('id');
    }
}
