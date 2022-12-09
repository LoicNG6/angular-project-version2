import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }
}
