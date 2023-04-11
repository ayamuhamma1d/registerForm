import { Cart } from '../cart';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  cartDetails:Cart={} as Cart;
  constructor(private _cartService:CartService){}
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this._cartService.getCart().subscribe({
      next:(res)=>{this.cartDetails = res
      console.log(this.cartDetails);
      },
      error:(err)=>console.log(err)

    })
  }
  updateCart(id:string,count:number){
    this._cartService.updateCart(id,count).subscribe({
      next: (res) => {
        this.cartDetails = res
        console.log(this.cartDetails);
      },
      error: (err) => console.log(err)

    })
  }
  deleteItem(id:string){
    this._cartService.deleteItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res
        console.log(this.cartDetails);
      },
      error: (err) => console.log(err)

    })
  }
}
