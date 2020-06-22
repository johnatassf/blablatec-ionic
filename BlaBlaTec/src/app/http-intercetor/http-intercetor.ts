import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.getTokenAutetication();
    
    let requestCloned: HttpRequest<any> = request;
    if (token && token.authenticated) {
      requestCloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token.accessToken)
      });

      return next.handle(requestCloned);
    }

    return next.handle(request);
  }
}
