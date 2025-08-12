import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class EventoMetadaService {
  apiName = 'Default';
  

  getUrlById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/detalle-evento/${id}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
