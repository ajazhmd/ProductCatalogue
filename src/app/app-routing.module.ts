import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCatalogueComponent} from './components/product-catalogue/product-catalogue.component';

const routes: Routes = [{
  path:"products/catalogue"
  ,component:ProductCatalogueComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
