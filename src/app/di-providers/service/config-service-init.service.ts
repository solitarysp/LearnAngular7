import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
  useFactory: () => new ConfigServiceInitService('init ConfigServiceInitService'),
})
export class ConfigServiceInitService {

  constructor(s: string) {
    console.log(s);
  }
}
