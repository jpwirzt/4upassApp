import type { TutorialDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  apiName = 'Default';
  

  create = (input: TutorialDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TutorialDto>({
      method: 'POST',
      url: '/api/app/tutorial',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/tutorial/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TutorialDto[]>({
      method: 'GET',
      url: '/api/app/tutorial',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: TutorialDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TutorialDto>({
      method: 'PUT',
      url: `/api/app/tutorial/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
