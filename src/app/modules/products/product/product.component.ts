import { Component, Input, output } from '@angular/core';
import { Product } from '../../../models/product';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-pos-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product:any;
  addedProduct = output<Product>();
  addIcon = 'fa-solid fa-circle-plus me-md-1';
  banIcon = 'fa-solid fa-ban';

  constructor (private eventService: EventService) {}

  clickAddButton(product: Product) {
    this.eventService.emitAddProductEvent(product);
  }
}