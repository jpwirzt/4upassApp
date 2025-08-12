import type { ArchivoDto, GetArchivosListDto, UpdateArchivoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  apiName = 'Default';
  

  createArchivo = (archivo: ArchivoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArchivoDto>({
      method: 'POST',
      url: '/api/app/file/archivo',
      body: archivo,
    },
    { apiName: this.apiName,...config });
  

  deleteArchivo = (archivoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/file/archivo/${archivoId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArchivoDto>({
      method: 'GET',
      url: `/api/app/file/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getArchivo = (fileName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArchivoDto>({
      method: 'GET',
      url: '/api/app/file/archivo',
      params: { fileName },
    },
    { apiName: this.apiName,...config });
  

  getArchivosList = (input: GetArchivosListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ArchivoDto>>({
      method: 'GET',
      url: '/api/app/file/archivos-list',
      params: { nombre: input.nombre, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getArchivosListById = (archivosIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArchivoDto[]>({
      method: 'GET',
      url: '/api/app/file/archivos-list-by-id',
      params: { archivosIds },
    },
    { apiName: this.apiName,...config });
  

  updateArchivo = (updatedArchivo: UpdateArchivoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/file/archivo',
      body: updatedArchivo,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
