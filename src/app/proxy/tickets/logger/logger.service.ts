import type { LogLevel } from './log-level.enum';
import type { UserLoggerStatus } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  apiName = 'Default';
  

  getUserLogger = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserLoggerStatus>({
      method: 'GET',
      url: '/api/app/logger/user-logger',
    },
    { apiName: this.apiName,...config });
  

  log = (logLevel: LogLevel, message: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/logger/log',
      params: { logLevel, message },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
