import {Injectable} from '@angular/core';

export class UserServiceConfig {
  userName;
}

@Injectable({
  providedIn: 'root'
})
export class ForRootService {

  constructor(private config: UserServiceConfig) {
  }

  getName(): string {
    return this.config.userName;
  }
}
