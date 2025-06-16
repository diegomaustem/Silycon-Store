import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itens: ICartProduct[] = [];

  constructor() {}

  getCart() {
    this.itens = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.itens;
  }

  addingToCart(product: ICartProduct) {
    this.itens.push(product);
    localStorage.setItem('cart', JSON.stringify(this.itens));
  }

  removeCartProduct(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.itens));
  }

  clearCart() {
    this.itens = [];
    localStorage.clear();
  }
}
