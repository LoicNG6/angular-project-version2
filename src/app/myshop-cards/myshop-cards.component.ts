import { Component } from '@angular/core';
import { Article } from './articles';
import { Specification } from './specifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myshop-cards',
  templateUrl: './myshop-cards.component.html',
  styleUrls: ['./myshop-cards.component.scss']
})
export class MyshopCardsComponent {
  //Iphone 12
  readonly iphone12Specifications: Specification = {
    color: "black",
    weight: "250g",
    storage: "256GB",
    price: 1000,
  };

  readonly iphone12: Article = {
    img: "/src/assets/car_pictures/iphone12.png",
    name: "Iphone 12",
    specification: this.iphone12Specifications,
  };

  //iphone 14
  readonly iphone14Specifications: Specification = {
    color: "white",
    weight: "250g",
    storage: "256GB",
    price: 1300,
  };

  readonly iphone14: Article = {
    img: "/src/assets/car_pictures/iphone14.jpg",
    name: "Iphone 14",
    specification: this.iphone14Specifications,
  };

  //airPods
  readonly airpodsSpecifications: Specification = {
    color: "white",
    weight: "250g",
    storage: "512GB",
    price: 900,
  };

  readonly airpods: Article = {
    img: "/src/assets/car_pictures/airpodsPro.jpg",
    name: "Airpods",
    specification: this.airpodsSpecifications,
  };

  //samsung S22
  readonly samsungS22Specifications: Specification = {
    color: "black",
    weight: "50g",
    storage: "N/A",
    price: 900,
  };

  readonly samsungS22: Article = {
    img: "/src/assets/car_pictures/samsungs22.jpg",
    name: "Samsung S22",
    specification: this.samsungS22Specifications,
  };

  //samsung Note10
  readonly samsungNote10Specifications: Specification = {
    color: "black",
    weight: "250g",
    storage: "256GB",
    price: 950,
  };

  readonly samsungNote10: Article = {
    img: "/src/assets/car_pictures/samsugS10.jpg",
    name: "Samsung Note 10",
    specification: this.samsungNote10Specifications,
  };

  //array for all article

  articles = [
    this.iphone14,
    this.iphone12,
    this.airpods,
    this.samsungS22,
    this.samsungNote10,
  ];

  constructor(private router: Router) { }
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