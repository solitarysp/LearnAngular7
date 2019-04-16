import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {map} from 'rxjs/operators';

@Injectable()
export class ResponseInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(x => {
        if (x instanceof HttpResponse) {
          console.log('Interceptor sau khi cal xong API', x);
          x = x.clone({
            headers: req.headers.set('AuthenAtResponse', 'AuthenAtResponse').set('AuthenAtResponse2', 'AuthenAtResponse2'),
          });
          return x;
        } else {
          return x;
        }
      }),
    );
  }
}
