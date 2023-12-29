import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { PaiementPageComponent } from './pages/paiement-page/paiement-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailsPageComponent,
    PaiementPageComponent,
    CartPageComponent,
    CartComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProductCardComponent,
    NavBarComponent,
    ProductListComponent,
    OurValuesComponent,
    HomeCarouselComponent,
    HomeCategoriesComponent,
    VendorComponent,
    ContactPageComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule

  ]
})
export class ShopModule { }
