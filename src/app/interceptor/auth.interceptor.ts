import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,  
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }

//   intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = this.auth.token
//     if (token == "") {
//       return next.handle(req)
//     }
//     req = req.clone({
//       setHeaders: {
//         Authorization: "Bearer " + token
//       }
//     })
//     return next.handle(req)
//   }
}