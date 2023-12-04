import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingService } from '../logging.service';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(request: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}

//Maximum cache age(ms)
const maximumAge: number = 30000;

@Injectable()
export class RequestCacheService implements RequestCache {
  constructor(
    private _logging: LoggingService
  ) { }
  private cache = new Map<string, RequestCacheEntry>();

  get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = request.urlWithParams;
    const cached = this.cache.get(url);
    if (!cached) {
      return undefined;
    }
    const isExpired = cached.lastRead < (Date.now() - maximumAge)
    const expired = isExpired ? 'expired' : '';
    this._logging.add(
      `Found ${expired} cached response for ${url}.`
    );
    return isExpired ? undefined : cached.response;
  }

  put(request: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = request.urlWithParams;
    this._logging.add(`Caching response from "${url}".`);
    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    const expired = Date.now() - maximumAge;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });
    this._logging.add(`Request cache size: ${this.cache.size}.`);
  }
}
