import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeAPIStoreService } from '../fake-apistore.service';
import { FakeProduct } from '../fake-apimodels';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  public userEmail!:string;
  public message!:string;
  public interestedProduct!:FakeProduct;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _FakeAPIService:FakeAPIStoreService
  ){}
  
  ngOnInit():void{
    this._FakeAPIService.getProductsById(this.getRouteId())
    .subscribe(data=>{
      this.interestedProduct = data;
      this.message = `Hi, I am interested in ${this.interestedProduct.title.toLowerCase()} !`;
    });
  }

  getRouteId():any{
    return this._route.snapshot.paramMap.get('id');
  }

  sendMessage():void{
    alert('Your message has been send.');
    this._router.navigateByUrl('/fakeProductListings');
  }

}
