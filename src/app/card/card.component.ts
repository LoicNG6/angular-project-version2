import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() article: any;
  @Input() specifications: any;

  constructor(private router: Router) { };
  
  cart: Array<any> = []

  addInCart() {
    this.cart.push(this.article);
    console.log()
    console.log("article = ", this.article);
    localStorage.setItem("cart", JSON.stringify(this.cart));  
    this.router.navigate(['cart']);
  }
}
