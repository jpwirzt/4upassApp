import type { AsignacionesSeguridadDto, CreateUpdateSeguridadDto, GetSeguridadEventosFilterDto, GetSeguridadListFilterDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { EventoDto } from '../eventos/models';
import type { GetIdDto } from '../models';
import type { AsignacionSeguridadEventoDto, EventosAsignadosDto, SeguridadUserDto } from '../../models';
import type { IdentityUserDto } from '../../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  apiName = 'Default';
  

  create = (creationSeguridad: CreateUpdateSeguridadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: '/api/app/seguridad',
      body: creationSeguridad,
    },
    { apiName: this.apiName,...config });
  

  delete = (seguridadId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'DELETE',
      url: '/api/app/seguridad',
      params: { seguridadId },
    },
    { apiName: this.apiName,...config });
  

  deleteSeguridadEvento = (seguridadId: string, eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'DELETE',
      url: '/api/app/seguridad/seguridad-evento',
      params: { seguridadId, eventoId },
    },
    { apiName: this.apiName,...config });
  

  getEventosActivosAdmCliente = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventosAsignadosDto[]>({
      method: 'GET',
      url: '/api/app/seguridad/eventos-activos-adm-cliente',
    },
    { apiName: this.apiName,...config });
  

  getEventosAsignadosRolSeg = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventosAsignadosDto[]>({
      method: 'GET',
      url: '/api/app/seguridad/eventos-asignados-rol-seg',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetSeguridadListFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AsignacionesSeguridadDto>>({
      method: 'GET',
      url: '/api/app/seguridad',
      params: { dni: input.dni, name: input.name, userName: input.userName, phoneNumber: input.phoneNumber, email: input.email, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSeguridadEventos = (input: GetSeguridadEventosFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventoDto>>({
      method: 'GET',
      url: '/api/app/seguridad/seguridad-eventos',
      params: { seguridadUserId: input.seguridadUserId, nombre: input.nombre, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSeguridadEventosBySeguridadId = (seguridadId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoDto[]>({
      method: 'GET',
      url: `/api/app/seguridad/seguridad-eventos/${seguridadId}`,
    },
    { apiName: this.apiName,...config });
  

  getSeguridadFromOneEvento = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SeguridadUserDto[]>({
      method: 'GET',
      url: `/api/app/seguridad/seguridad-from-one-evento/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  getUsersWithSeguridad = (dto: GetIdDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SeguridadUserDto[]>({
      method: 'GET',
      url: '/api/app/seguridad/users-with-seguridad',
      params: { id: dto.id },
    },
    { apiName: this.apiName,...config });
  

  setUsersWithSeguridadAndEvento = (request: AsignacionSeguridadEventoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/seguridad/set-users-with-seguridad-and-evento',
      body: request,
    },
    { apiName: this.apiName,...config });
  

  update = (updateSeguridad: CreateUpdateSeguridadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'PUT',
      url: '/api/app/seguridad',
      body: updateSeguridad,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
