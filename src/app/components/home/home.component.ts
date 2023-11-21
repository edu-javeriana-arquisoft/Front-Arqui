import { Component, OnInit } from '@angular/core';
import { ProductModelServer, serverResponse } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {
    this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }
}
