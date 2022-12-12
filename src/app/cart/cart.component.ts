import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart = [];

  ngOnInit() {
    let cartTemp = localStorage.getItem("cart");
    this.cart = cartTemp != null ? JSON.parse(cartTemp) : [];
    console.log("ini ", this.cart)
  }
}
