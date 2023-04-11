import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string = '';
  productDetails:Products={} as Products;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }

constructor(private _activatedRoute: ActivatedRoute ,private _productService: ProductService,private _cartService: CartService){
this._activatedRoute.paramMap.subscribe((res:any) =>{
  console.log(res.params.id);
this.productId=res.params.id;
})
  this._productService.getProductsDetails(this.productId).subscribe({
    next:(res)=>{
console.log(res.data);
      this.productDetails = res.data;
    }
  })
}
addProduct(id:string){
  this._cartService.addToCart(id).subscribe({
    next:(res)=>console.log(res),
    error:(err)=>console.log(err)

  })
}
}
