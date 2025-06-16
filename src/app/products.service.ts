import { Injectable } from '@angular/core';
import { IProduct, products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() {}

  getProducts(): IProduct[] {
    return this.products;
  }
  getProduct(id: number): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }
}
