import { Component, OnInit,Input } from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-prod-cat-view',
  templateUrl: './prod-cat-view.component.html',
  styleUrls: ['./prod-cat-view.component.css']
})
export class ProdCatViewComponent implements OnInit {
  @Input()
  data:any[];
  categories=[];
  subscription:Subscription;
  distinctCategories=[];
  displayData=[];
  
  constructor(private _productService:ProductService) { 
    this.subscription=this._productService.getFilteredProducts()
                      .subscribe(filteredData=>{
                        this.data=filteredData;
                      });
  }

  ngOnInit() {}

  ngOnChanges(){
    this.distinctCategories=this._productService.getDistinctValues(this.data,'category');
    this.displayData=[];

    this.distinctCategories.forEach(cat=>{
      let catObj={};
      catObj["category"]=cat;
      catObj["sub_category"]=[];

      let arrProdCategory=this.data.filter(x=>{return x.category===cat});
      let distinctSubCat=this._productService.getDistinctValues(arrProdCategory,'sub-category');

      distinctSubCat.forEach(subCat=>{
        let arrProds=this.data.filter(p=>{
          return (p["category"]===cat && p["sub-category"]===subCat)
        });
        let subCatObj={};
        subCatObj["sub_category"]=subCat;
        subCatObj["products"]=arrProds;
        catObj["sub_category"].push(subCatObj);
      });

      this.displayData.push(catObj);
    });
  }
}