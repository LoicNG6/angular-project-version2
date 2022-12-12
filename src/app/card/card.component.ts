import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from './global';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() article: any;
  @Input() specifications: any;

  constructor(private router: Router) { };

  public static carts: any = [];
  static order: number = 0;
  quantity: any = 0;
  quantitiesPerArticle: any = [];
  carts: Array<any> = [];

  ngOnInit() {
    // let c = localStorage.getItem("carts");
    // let db_carts = c !== null ? JSON.parse(c) : null;
    // console.log("ng db_carts = ", db_carts);
    // this.quantity = db_carts !== null ? Object.keys(db_carts).length : 0;
    // console.log('ng length', Object.keys(db_carts).length);
    // console.log("ng quantity ", this.quantity);
  }

  addInCarts() {
    this.quantity++;

    if (CardComponent.carts.length > 0 && CardComponent.carts.some((cart: any) => cart.article.id === this.article.id)) {
      let articleIndex = CardComponent.carts.findIndex((object: any) => {
        return object.article.id === this.article.id;
      });

      CardComponent.carts[articleIndex].quantity++;
    } else {
      console.log("Current article not found in Carts ");
      CardComponent.carts.push({
        article: this.article,
        quantity: this.quantity,
      });
    }

    console.log(" finale carts = ", CardComponent.carts);
  }

  removeFroCarts() {
    if (this.quantity > 0) {
      CardComponent.carts.splice(Object.keys(CardComponent.carts).length - 1, 1);
      this.quantity--;
      console.log('result = ', CardComponent.carts);
      // localStorage.removeItem("carts");
      // localStorage.setItem('carts', JSON.stringify(CardComponent.carts));
    }
  }

}
