import { Component } from '@angular/core';
import { ProductModelServer } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: string[] = ['Grocery',"Games","Kids","Toys","Jewelery","Clothing"];
  productsByCategory: ProductModelServer[]=[]

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {

  }

  redirectProductsCategory(cat:string){
    this.router.navigate(['/productsByCategory', cat]);
  }
}
