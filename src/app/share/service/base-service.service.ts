import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponseBase} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {OperatorFunction} from 'rxjs/src/internal/types';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  constructor(private http: HttpClient, private router: Router) {
  }

  callGetRequest(url): Observable<any> {
    return this.http.get(url, this.setHeaderToken()).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  callGetRequestImage(url): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(url, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      ),
    }).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  callPostRequest(url, params?): Observable<any> {
    return this.http.post(url, params, this.setHeaderToken()).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  callPostRequestFormData(url, params): Observable<any> {
    const httpOptions = this.setHeaderToken();
    httpOptions.headers = httpOptions.headers.delete('Content-Type');
    return this.http.post(url, params, httpOptions).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  callPutRequest(url, params): Observable<any> {
    return this.http.put(url, params, this.setHeaderToken()).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  callDeleteRequest(url): Observable<any> {

    return this.http.delete(url, this.setHeaderToken()).pipe(
      map(_res => this.handleSuccess(_res))
    );
  }

  handleSuccess(_res): OperatorFunction<any, any> {
    switch (_res.status) {
      case 403:
        this.router.navigateByUrl('login');
        localStorage.removeItem('userLogin');
        break;
    }
    return _res;
  }

  private handleError(error: any): Promise<any> {
    const _err: HttpResponseBase = error;
    this.router.navigateByUrl('login');
    localStorage.removeItem('userLogin');
    return Promise.reject(_err);
  }

  setHeaderToken() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }),
    };
    return httpOptions;
  }

}
