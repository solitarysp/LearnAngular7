import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse} from '@angular/common/http';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;

  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const ms = 60 * 1000; // 60S = 60000 MS
const maxAge = 1 * ms; // PHÚT
@Injectable({
  providedIn: 'root'
})
export class RequestCacheService implements RequestCache {

  cache = new Map<string, RequestCacheEntry>();

  constructor() {
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;

    const entry = {
      url,
      response,
      lastRead: Date.now(),
      body: req.body
    };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach((value) => {
      if (value.lastRead < expired) {
        this.cache.delete(value.url);
      }
    });

  }
}
