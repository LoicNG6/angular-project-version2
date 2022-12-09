import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshopCardsComponent } from './myshop-cards.component';

describe('MyshopCardsComponent', () => {
  let component: MyshopCardsComponent;
  let fixture: ComponentFixture<MyshopCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshopCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyshopCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
