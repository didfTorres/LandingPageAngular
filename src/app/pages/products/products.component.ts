import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Iproducto } from '../../../models/products.models';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: Iproducto[] = [];
  private _apiservice = inject(ApiService);
  private _route=inject(Router)

  ngOnInit(): void {
    this._apiservice.getProducts().subscribe((data: Iproducto[] ) => {
      console.log(data);
      
      this.productList = data;
    });
  }

  navegate(id:number):void{
    this._route.navigate(['/products',id])
    
  }
}
