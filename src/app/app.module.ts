import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ConcatePipe } from './concate.pipe';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,

    CategoriesComponent,
    NotFoundComponent,
    FooterComponent,
    BrandsComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    ConcatePipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, CarouselModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
