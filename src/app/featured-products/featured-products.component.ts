import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit  {
constructor(private _productsService: ProductService){}

  allProducts:any[]=[];
ngOnInit(): void {
this.grtAllProduct();
}
grtAllProduct(){
this._productsService.getProducts().subscribe({
next:(res)=>{console.log(res);
  this.allProducts=res.data;
}
})
}
}
