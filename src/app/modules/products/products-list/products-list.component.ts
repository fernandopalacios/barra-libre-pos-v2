import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductsCategories } from '../../../enums/ProductsCategoryEnum';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-pos-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  food: Product[] = [];
  drinks: Product[] = [];
  snacks: Product[] = [];

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.orderProductsByCategory(this.products);
      }
    });
  }

  addProductToOrder(product: Product) {
    console.log(product);
  }

  private orderProductsByCategory(allProducts: Product[]) {
    this.food = allProducts.filter(p => p.category == ProductsCategories.Food);
    this.drinks = allProducts.filter(p => p.category == ProductsCategories.Drink);
    this.snacks = allProducts.filter(p => p.category == ProductsCategories.Snack);
  }
}
