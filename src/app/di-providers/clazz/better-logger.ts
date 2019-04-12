import {Injectable} from '@angular/core';
import {Logger} from './logger';

@Injectable()
export class BetterLogger {
  constructor(private logger: Logger) {
  }

  log() {
    console.log(this.logger.logError());
  }
}
