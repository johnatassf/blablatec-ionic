import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    public toastController: ToastController) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  //   const token = this.authService.getTokenAutetication();

  //   let requestCloned: HttpRequest<any> = request;
  //   if (token && token.authenticated) {
  //     requestCloned = request.clone({
  //       headers: request.headers.set('Authorization', 'Bearer ' + token.accessToken)
  //     });

  //     return next.handle(requestCloned);
  //   }

  //   return next.handle(request);
  // }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getTokenAutetication();

    let requestCloned: HttpRequest<any> = request;
    if (token && token.authenticated) {
      requestCloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token.accessToken)
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.presentToast('Login failed');
          // this.router.navigate(['login']);
        }
        else if (error.status === 500) {
          this.presentToast(`O correu um erro ao comunicar com o servidor,
             por favor entre novamente mais tarde`);
          // this.router.navigate(['login']);
        }
        else if (error.status === 400) {
          this.presentToast(error.error.message ?? error.error);
          // this.router.navigate(['login']);

        }
        else {
          this.presentToast(`O correu um erro ao comunicar com o servidor,
             por favor tente novamente mais tarde`);
        }
        return throwError(error);
      }));
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color: 'danger',
      cssClass: ['--end']

    });
    toast.present();
  }
}
