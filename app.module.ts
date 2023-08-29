import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductsInfoPageComponent } from './pages/products-info-page/products-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerSliderComponent,
    ProductCardsComponent,
    FooterComponent,
    LoginPageComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductsInfoPageComponent,
    NotFoundPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
