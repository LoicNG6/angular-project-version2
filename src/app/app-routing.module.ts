import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyshopCardsComponent } from './myshop-cards/myshop-cards.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-shop', pathMatch: 'full' },
  { path: 'my-shop', title:'my-shop', component: MyshopCardsComponent },
  { path: 'cart', title:'my-shop', component: CartComponent },
  { path: 'profile', title:'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }