import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllProducts(limitOfResults=10): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'Products/GetAllProducts');
  }

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  }

  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'Products/GetProductsByCategory/' + catName);
  }

}
