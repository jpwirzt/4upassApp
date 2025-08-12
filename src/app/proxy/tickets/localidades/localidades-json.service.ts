import type { LocalidadProvinciaDto, PaisesDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class LocalidadesJsonService {
  apiName = 'Default';
  

  getPais = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaisesDto>({
      method: 'GET',
      url: `/api/app/localidades-json/${id}/pais`,
    },
    { apiName: this.apiName,...config });
  

  getPaises = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaisesDto[]>({
      method: 'GET',
      url: '/api/app/localidades-json/paises',
    },
    { apiName: this.apiName,...config });
  

  getProvinciasYLocalidades = (input: PagedResultRequestDto, searchTerm: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocalidadProvinciaDto[]>({
      method: 'GET',
      url: '/api/app/localidades-json/provincias-yLocalidades',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, searchTerm },
    },
    { apiName: this.apiName,...config });
  

  insertarProvYLocs = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/app/localidades-json/ar-prov-yLocs',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
