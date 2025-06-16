import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itens: ICartProduct[] = [];

  constructor() {}

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '');
  }

  addingToCart(product: ICartProduct) {
    this.itens.push(product);
    localStorage.setItem('cart', JSON.stringify(this.itens));
  }

  clearCart() {
    this.itens = [];
    localStorage.clear();
  }
}
