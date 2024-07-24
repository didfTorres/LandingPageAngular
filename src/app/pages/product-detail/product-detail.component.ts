import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Iproducto } from '../../../models/products.models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
loading :boolean=true;
public product?:Iproducto;
  private _route=inject(ActivatedRoute);
  private _apiservice=inject(ApiService);

  ngOnInit(): void {
  this._route.params.subscribe(params=>{
   this._apiservice.getProduct(params['id']).subscribe((data:Iproducto)=>{
    console.log(data);
    this.product=data;
    this.loading=false;
    
   }) 
  })
  }

}
