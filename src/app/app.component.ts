import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exoCardPrinting';
  
  constructor(private router: Router) {};
  
  goToShop() {
    this.router.navigate(['my-shop']);
  }

  goToCart() {
    localStorage.removeItem("cart");
    let articles = CardComponent.articles;
    localStorage.setItem("cart", JSON.stringify(articles));
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }
}
