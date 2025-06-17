import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent implements OnInit {
  description = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchProduct() {
    if (this.description) {
      this.router.navigate(['products'], {
        queryParams: { descricao: this.description },
      });
      return;
    }

    this.router.navigate(['products']);
  }
}
