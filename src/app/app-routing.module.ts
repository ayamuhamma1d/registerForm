
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home',canActivate:[AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent },
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent },
  { path: 'brands', canActivate: [AuthGuard], component: BrandsComponent },
  { path: 'productDetails/:id', canActivate: [AuthGuard], component: ProductDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
