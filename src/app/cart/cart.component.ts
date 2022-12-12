import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private route: ActivatedRoute) { }

  // cart: Array<any> = [];

  ngOnInit() {
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(CardComponent.carts));
    console.log('bonjour');
    console.log("bonjour CardComponent.cart : ", CardComponent.carts);
    // let db = localStorage.getItem("cart");
    // this.cart = db !== null ? JSON.parse(db) : null;
    // console.log("db = ", this.cart);
  }
}
