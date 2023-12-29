import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { PaiementPageComponent } from './pages/paiement-page/paiement-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'products/:slug',
    component: ProductDetailsPageComponent
  },
  {
    path: 'paiement/:slug',
    component: PaiementPageComponent
  },
  {
    path: 'cart/:slug',
    component: CartPageComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
