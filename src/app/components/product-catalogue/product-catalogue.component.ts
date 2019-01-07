import { Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {

  allProducts:Product[];
  categories=[];
  filter={};
  filteredData=[];

  constructor(private _productService:ProductService){  }

  ngOnInit() {
    this._productService.getAllProducts()
    .then(data=>data['products'])
    .then(data=>{
      this.allProducts=data;
      this.filteredData=JSON.parse(JSON.stringify(this.allProducts));
      this.populateCategories();
      this._productService.setFilteredProducts(this.filteredData);
    });
  }

  filterChange(){
    let filterKeys=Object.keys(this.filter);
    let result=[];
    filterKeys.forEach(key=>{
      if(this.filter[key]){
        let obj=this.allProducts.filter(p=>p.category===key);
        result= result.concat(obj);
      }
    });
    
    let searchKey:string=this.filter["textFilter"];
    try{
      searchKey=searchKey.trim();
      searchKey=searchKey.toLowerCase();
    }
    catch(ex){
      searchKey="";
    }
    
    result=result.filter(r=>{
      let nameField=r.name;
      let itemCategory=r.category;
      let itemSubCategory=r["sub-category"];
      console.log(itemSubCategory);

      nameField=nameField.toLowerCase();
      return (nameField.includes(searchKey)
              || itemCategory.includes(searchKey)
              || itemSubCategory.includes(searchKey)
      );
    });

    this.filteredData=result;
  }

  populateCategories(){
    this.categories=this._productService.getDistinctValues(this.allProducts,"category");
    this.categories.forEach(x=>{
     this.filter[x]=true;
    });
  }
}