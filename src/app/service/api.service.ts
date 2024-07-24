import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducto } from '../../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http=inject(HttpClient);
private urlBase:string ='https://fakestoreapi.com/products';

getProducts():Observable<Iproducto[]>{
  return this._http.get<Iproducto[]>(this.urlBase);
} 
getProduct(id:number):Observable<Iproducto>{
  return this._http.get<Iproducto>(`${this.urlBase}/${id}` );
} 

}
