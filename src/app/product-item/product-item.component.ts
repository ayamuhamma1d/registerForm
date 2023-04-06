
import { Component, Input } from '@angular/core';
import { Products } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Products = {} as Products;
}
