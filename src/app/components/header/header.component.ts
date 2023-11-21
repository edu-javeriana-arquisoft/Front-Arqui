import { Component } from '@angular/core';
import { CartModelServer } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartData: CartModelServer | undefined;
  cartTotal: number | undefined;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
  this.cartService.cartTotal$.subscribe(total => {
    this.cartTotal = total;
  });

  this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }

}
