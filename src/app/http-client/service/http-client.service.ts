import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseBE} from '../../share/model/response-be';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) {
  }

  changeHttpOptions() {
    const newHttpOptions = httpOptions.headers.set('Authorization', 'là token mới');
    console.log(httpOptions.headers.get('Authorization'));
    console.log(newHttpOptions.get('Authorization'));
  }

  httpParamHttp(): Observable<any> {
    return this.http.get<any>('/assets/jsonFake/jsonSearhc.json', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      }),
      observe: 'response',
      params: new HttpParams()
    });
  }

  search(): Observable<any> {
    return this.http.get<any>('/assets/jsonFake/jsonSearhc.json', httpOptions);
  }
}
