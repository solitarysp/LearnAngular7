import {Injectable} from '@angular/core';
import {Logger} from './logger';

@Injectable()
export class BetterLogger {
  constructor(private logger: Logger) {
  }

  log() {
    this.logger.logError();
  }
}
