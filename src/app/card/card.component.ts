import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyshopCardsComponent } from '../myshop-cards/myshop-cards.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() article: any;
  @Input() specifications: any;

  public static articles: any = [];
  quantity: any = 0;

  ngOnInit() {
    let articleStringify = localStorage.getItem("cart");
    CardComponent.articles = articleStringify != null ? JSON.parse(articleStringify) : [];
  }

  addArticle() {
    this.quantity++;

    if (CardComponent.articles.length > 0 && CardComponent.articles.some((cart: any) => cart.article.id === this.article.id)) {
      let articleIndex = CardComponent.articles.findIndex((object: any) => {
        return object.article.id === this.article.id;
      });

      CardComponent.articles[articleIndex].quantity++;
    } else {
      CardComponent.articles.push({
        article: this.article,
        quantity: this.quantity,
      });
    }
  }

  removeArticle() {
    if (this.quantity > 0) {
      CardComponent.articles.splice(Object.keys(CardComponent.articles).length - 1, 1);
      this.quantity--;
    }
  }

}
