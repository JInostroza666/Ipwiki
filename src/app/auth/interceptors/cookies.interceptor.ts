import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class CookiesInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')?.toString();
    console.log(token);
    if (token) {
      request = request.clone({
        headers: request.headers.set('token', token)
      });
      return next.handle(request).pipe(
        catchError(this.handleteError)
      );
    }
    return next.handle(request).pipe(
      catchError(this.handleteError)
    );
  }
  handleteError(error: HttpErrorResponse) {
    switch (error.status) {
      case 401:
        console.log('401');
        break;
      case 403:
        console.log('403');
        break;
      case 404:
        console.log('404');
        break;
      case 452:
        alert('Usuario Incorrecto');
        break;
      case 500:
        console.log('500');
        break;
      case 503:
        console.log('503');
        break;
      default:
    }
    return throwError(error)
  }
}
export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CookiesInterceptor,
  multi: true
}
