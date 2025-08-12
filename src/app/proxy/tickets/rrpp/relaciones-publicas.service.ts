import type { CountSubRRPPDto, CreateUpdateRRPPDto, EventosRRPPDto, GetEventosRRPPFilterDto, GetRRPPListFilterDto, GetSubRRPPFromOneEventoOfRRPPDto, GetSubRRPPFromOneEventoOfRRPPFilterDto, InsertRRPPToVentaDirectaDto, RelacionesPublicasDto, RrppAutocompleteDto, UpdateRRPPInputDto } from './models';
import type { TipoRRPP } from './tipo-rrpp.enum';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DtoReturnError, DtoReturnErrorData, EventoRRPPDto } from '../eventos/models';
import type { GetIdDto } from '../models';
import type { AsignacionRRPPEventoDto, RRPPUserDto } from '../../models';
import type { GetSubRRPPListFilterDto } from '../seguridad/models';

@Injectable({
  providedIn: 'root',
})
export class RelacionesPublicasService {
  apiName = 'Default';
  

  create = (input: RelacionesPublicasDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RelacionesPublicasDto>({
      method: 'POST',
      url: '/api/app/relaciones-publicas',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createRRPP = (dto: CreateUpdateRRPPDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnErrorData<RelacionesPublicasDto>>({
      method: 'POST',
      url: '/api/app/relaciones-publicas/r-rPP',
      body: dto,
    },
    { apiName: this.apiName,...config });
  

  createSubRRPP = (dto: CreateUpdateRRPPDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnErrorData<RelacionesPublicasDto>>({
      method: 'POST',
      url: '/api/app/relaciones-publicas/sub-rRPP',
      body: dto,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/relaciones-publicas/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteEventoRRPP = (rrppId: string, EventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/relaciones-publicas/evento-rRPP',
      params: { rrppId, eventoId: EventoId },
    },
    { apiName: this.apiName,...config });
  

  deleteEventoSubRRPP = (rrppId: string, EventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/relaciones-publicas/evento-sub-rRPP',
      params: { rrppId, eventoId: EventoId },
    },
    { apiName: this.apiName,...config });
  

  deleteRRPP = (RRPPId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/relaciones-publicas/r-rPP/${RRPPId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RelacionesPublicasDto>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getEventosAsignadosRRPP = (input: GetEventosRRPPFilterDto, tipo: TipoRRPP, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventoRRPPDto>>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/eventos-asignados-rRPP',
      params: { nombreEvento: input.nombreEvento, totalVendidos: input.totalVendidos, cortesiaTransferible: input.cortesiaTransferible, ventaDirecta: input.ventaDirecta, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, tipo },
    },
    { apiName: this.apiName,...config });
  

  getEventosRRPP = (input: GetEventosRRPPFilterDto, RRPPId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventosRRPPDto>>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/eventos-rRPP/${RRPPId}`,
      params: { nombreEvento: input.nombreEvento, totalVendidos: input.totalVendidos, cortesiaTransferible: input.cortesiaTransferible, ventaDirecta: input.ventaDirecta, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RelacionesPublicasDto>>({
      method: 'GET',
      url: '/api/app/relaciones-publicas',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getRRPP = (input: GetRRPPListFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RelacionesPublicasDto>>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/r-rPP',
      params: { nombreUsuario: input.nombreUsuario, name: input.name, dni: input.dni, email: input.email, telefono: input.telefono, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getRRPPEmailsByEventoId = (eventoId: string, autocomplete: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RrppAutocompleteDto[]>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/r-rPPEmails-by-evento-id/${eventoId}`,
      params: { autocomplete },
    },
    { apiName: this.apiName,...config });
  

  getRrppNameById = (rrppId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: `/api/app/relaciones-publicas/rrpp-name-by-id/${rrppId}`,
    },
    { apiName: this.apiName,...config });
  

  getSubRRPPCountFromEvento = (dto: CountSubRRPPDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Record<string, boolean>>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/sub-rRPPCount-from-evento',
      params: { eventoIds: dto.eventoIds, rrppId: dto.rrppId },
    },
    { apiName: this.apiName,...config });
  

  getSubRRPPFromOneEventoOfRRPP = (rrppId: string, input: GetSubRRPPFromOneEventoOfRRPPFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<GetSubRRPPFromOneEventoOfRRPPDto>>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/sub-rRPPFrom-one-evento-of-rRPP/${rrppId}`,
      params: { nombreApellido: input.nombreApellido, totalVendidos: input.totalVendidos, search: input.search, eventoId: input.eventoId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSubRRPPList = (input: GetSubRRPPListFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RelacionesPublicasDto>>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/sub-rRPPList',
      params: { name: input.name, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUserRRPP = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, RelacionesPublicasDto[]>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/user-rRPP',
    },
    { apiName: this.apiName,...config });
  

  getUsersWithRRPP = (dto: GetIdDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RRPPUserDto[]>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/users-with-rRPP',
      params: { id: dto.id },
    },
    { apiName: this.apiName,...config });
  

  getUsersWithRRPPInReporteVentas = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RRPPUserDto[]>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/users-with-rRPPIn-reporte-ventas/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  getUsersWithSubRRPP = (dto: GetIdDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RelacionesPublicasDto[]>({
      method: 'GET',
      url: '/api/app/relaciones-publicas/users-with-sub-rRPP',
      params: { id: dto.id },
    },
    { apiName: this.apiName,...config });
  

  getUsersWithSubRRPPInReporteVentas = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RRPPUserDto[]>({
      method: 'GET',
      url: `/api/app/relaciones-publicas/users-with-sub-rRPPIn-reporte-ventas/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  insertRRPPToVentaDirecta = (input: InsertRRPPToVentaDirectaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnError>({
      method: 'POST',
      url: '/api/app/relaciones-publicas/r-rPPTo-venta-directa',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  reenviarEmail = (rrppId: string, eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnError>({
      method: 'POST',
      url: '/api/app/relaciones-publicas/reenviar-email',
      params: { rrppId, eventoId },
    },
    { apiName: this.apiName,...config });
  

  setEventoToRRPP = (request: AsignacionRRPPEventoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnErrorData<string>>({
      method: 'POST',
      url: '/api/app/relaciones-publicas/set-evento-to-rRPP',
      body: request,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: RelacionesPublicasDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RelacionesPublicasDto>({
      method: 'PUT',
      url: `/api/app/relaciones-publicas/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateRRPP = (input: UpdateRRPPInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/relaciones-publicas/r-rPP',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
