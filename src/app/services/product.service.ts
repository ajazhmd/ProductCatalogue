import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Product} from '../models/product';
import { Observable,Subject } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiBaseUrl:string="";
  private filteredroducts=new Subject<any>();

  constructor(private _httpClient:HttpClient) {
      this.apiBaseUrl=environment.apiBaseUrl;
   }

  getAllProducts(){
    return this._httpClient.get(`${this.apiBaseUrl}/products`)
          .toPromise();
  }

  setFilteredProducts(productList:any[]){
      this.filteredroducts.next(productList);
  }

  getFilteredProducts():Observable<any[]>{
      return this.filteredroducts.asObservable();
  }

  getDistinctValues(items,field){
    let lookup = {};
    let result = [];
    for (let item, i = 0; item = items[i++];) {
      let name = item[field];
      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }
    }
    return result;
  }
}
