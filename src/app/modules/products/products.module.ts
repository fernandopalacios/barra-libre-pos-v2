import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../services/product.service';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
