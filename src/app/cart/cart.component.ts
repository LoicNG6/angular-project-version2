import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const test = this.route.snapshot.queryParamMap.get('male');
    console.log("test", test);
  }
}
