import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const secureReq = req.clone({
      headers: req.headers.set('authen1', 'authen1').set('authen2', 'authen2'),
    });
    console.log('trước khi gửi request 1');
    return next.handle(secureReq);
  }
}
