import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})
export class ProductsByCategoryComponent implements OnInit{
  products: ProductModelServer[]=[]
  category: string | undefined

  constructor(private productService: ProductService,
          private route: ActivatedRoute ,
          private cartService: CartService,
          private router: Router 
          ) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['cat'];
      this.productService.getProductsFromCategory(this.category!).subscribe(products =>{
        this.products = products
      });
    });
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }


}
