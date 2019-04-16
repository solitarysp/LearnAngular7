import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/internal/operators/startWith';
import {of} from 'rxjs/internal/observable/of';
import {tap} from 'rxjs/internal/operators/tap';
import {RequestCacheService} from './request-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CachingService implements HttpInterceptor {

  constructor(private cache: RequestCacheService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cachedResponse = this.cache.get(req);
    // cache-then-refresh
    if (req.headers.get('x-refresh')) {
      const results$ = sendRequest(req, next, this.cache);
      return cachedResponse ?
        results$.pipe(startWith(cachedResponse)) :
        results$;
    }
    // cache-or-fetch
    if (cachedResponse) {
      console.log('lấy từ cache ra', req.url);
    } else {
      console.log('cache không có, new request mới với url = ', req.url);

    }
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}


function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCacheService): Observable<HttpEvent<any>> {

  const noHeaderReq = req.clone({headers: new HttpHeaders()});

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
}
