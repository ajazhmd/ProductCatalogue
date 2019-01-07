import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogueComponent } from './components/product-catalogue/product-catalogue.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProdCatViewComponent } from './components/prod-cat-view/prod-cat-view.component';
import { ProductComponent } from './components/product/product.component';

import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogueComponent,
    ProdCatViewComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }