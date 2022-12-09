import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyshopCardsComponent } from './myshop-cards/myshop-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyshopCardsComponent,
    NavbarComponent,
    CardComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
