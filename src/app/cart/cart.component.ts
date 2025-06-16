import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartProduct } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItens: ICartProduct[] = [];
  amount: number = 0;
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItens = this.cartService.getCart();
    this.calculateAmount();
  }

  calculateAmount() {
    this.amount = this.cartItens.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  removeCartProduct(id: number) {
    this.cartItens = this.cartItens.filter((item) => item.id !== id);
    this.cartService.removeCartProduct(id);
    this.calculateAmount();
  }

  buy() {
    alert('Compra realizada com sucesso!');
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
