import {Component, OnInit} from '@angular/core';
import {HttpClientService} from './service/http-client.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {ResponseBE} from '../share/model/response-be';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  packages$: Observable<any>;
  searchText$ = new Subject<string>();

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.changeHttpOptions();
    this.httpClientService.httpParamHttp().subscribe((value: HttpResponse<any>) => {
      console.log(value.headers.get('AuthenAtResponse2'));
    });

    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName => {
          return this.httpClientService.search().pipe(map((_res: Array<string>) => {
            return _res.filter(value => {
              return !value.indexOf(packageName);
            });
          }));
        }
      ));
  }

}
