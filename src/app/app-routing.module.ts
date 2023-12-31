import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { authGuard } from './shared/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';



const routes: Routes = [
  {path: "login", loadChildren: ()=> import('./modules/login/login.module').then(m => m.LoginModule), title: "Login"},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'productsByCategory/:cat', component: ProductsByCategoryComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent, canActivate: [authGuard],
  },
  {
    path: 'cart', component: CartComponent,canActivate: [authGuard]
  },
  {
    path: 'checkout', component: CheckoutComponent,canActivate: [authGuard]
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
