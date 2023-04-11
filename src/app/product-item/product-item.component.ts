
import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  constructor(private _cartService: CartService){}
  @Input() product: Products = {} as Products;

  addProduct(id:string){
   this._cartService.addToCart(id).subscribe({
  next:(res)=>console.log(res),
  error:(err)=>console.log(err)

})
 }
}
