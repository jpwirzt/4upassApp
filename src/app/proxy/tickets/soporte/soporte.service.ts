import type { GetListComprasDto, GetListEventosDto, GetListFuncionesDto, GetListInvitacionesDto, GetListNotificacionesDto, GetListPreciosDto, GetListSolicitudPagosDto, GetListUsuariosDto, SoportePreciosDto } from './get-list-dtos/models';
import type { SoporteCompraDto, SoporteEventosDto, SoporteFuncionesDto, SoporteInvitacionesDto, SoporteNotificacionesDto, SoporteSolicitudPagoDto } from './soporte-dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { UsuarioDto } from '../usuarios/models';

@Injectable({
  providedIn: 'root',
})
export class SoporteService {
  apiName = 'Default';
  

  getListCompras = (input: GetListComprasDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteCompraDto>>({
      method: 'GET',
      url: '/api/app/soporte/compras',
      params: { ["UsuarioId.MatchMode"]: input.usuarioId.matchMode, ["UsuarioId.Value"]: input.usuarioId.value, ["CompraId.MatchMode"]: input.compraId.matchMode, ["CompraId.Value"]: input.compraId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, ["Email.MatchMode"]: input.email.matchMode, ["Email.Value"]: input.email.value, creationTime: input.creationTime, ["NumEntradas.MatchMode"]: input.numEntradas.matchMode, ["NumEntradas.Value"]: input.numEntradas.value, estadoCompra: input.estadoCompra, ["NombreEvento.MatchMode"]: input.nombreEvento.matchMode, ["NombreEvento.Value"]: input.nombreEvento.value, fechaFuncion: input.fechaFuncion, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListEventos = (input: GetListEventosDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteEventosDto>>({
      method: 'GET',
      url: '/api/app/soporte/eventos',
      params: { ["EventoId.MatchMode"]: input.eventoId.matchMode, ["EventoId.Value"]: input.eventoId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, creationTime: input.creationTime, estadoEvento: input.estadoEvento, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListFunciones = (input: GetListFuncionesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteFuncionesDto>>({
      method: 'GET',
      url: '/api/app/soporte/funciones',
      params: { ["EventoId.MatchMode"]: input.eventoId.matchMode, ["EventoId.Value"]: input.eventoId.value, ["FuncionId.MatchMode"]: input.funcionId.matchMode, ["FuncionId.Value"]: input.funcionId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, creationTime: input.creationTime, fechaFuncion: input.fechaFuncion, estadoFuncion: input.estadoFuncion, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListInvitaciones = (input: GetListInvitacionesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteInvitacionesDto>>({
      method: 'GET',
      url: '/api/app/soporte/invitaciones',
      params: { ["InvitacionId.MatchMode"]: input.invitacionId.matchMode, ["InvitacionId.Value"]: input.invitacionId.value, ["FuncionId.MatchMode"]: input.funcionId.matchMode, ["FuncionId.Value"]: input.funcionId.value, ["CompraId.MatchMode"]: input.compraId.matchMode, ["CompraId.Value"]: input.compraId.value, ["SectorId.MatchMode"]: input.sectorId.matchMode, ["SectorId.Value"]: input.sectorId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, ["Email.MatchMode"]: input.email.matchMode, ["Email.Value"]: input.email.value, ["Cantidad.MatchMode"]: input.cantidad.matchMode, ["Cantidad.Value"]: input.cantidad.value, creationTime: input.creationTime, estadoCortesia: input.estadoCortesia, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListNotificaciones = (input: GetListNotificacionesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteNotificacionesDto>>({
      method: 'GET',
      url: '/api/app/soporte/notificaciones',
      params: { ["NotisId.MatchMode"]: input.notisId.matchMode, ["NotisId.Value"]: input.notisId.value, ["UsuarioId.MatchMode"]: input.usuarioId.matchMode, ["UsuarioId.Value"]: input.usuarioId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, ["Email.MatchMode"]: input.email.matchMode, ["Email.Value"]: input.email.value, ["Error.MatchMode"]: input.error.matchMode, ["Error.Value"]: input.error.value, creationTime: input.creationTime, estadoEnvio: input.estadoEnvio, ["Asunto.MatchMode"]: input.asunto.matchMode, ["Asunto.Value"]: input.asunto.value, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListPrecios = (input: GetListPreciosDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoportePreciosDto>>({
      method: 'GET',
      url: '/api/app/soporte/precios',
      params: { ["PrecioId.MatchMode"]: input.precioId.matchMode, ["PrecioId.Value"]: input.precioId.value, ["SectorId.MatchMode"]: input.sectorId.matchMode, ["SectorId.Value"]: input.sectorId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, ["Monto.MatchMode"]: input.monto.matchMode, ["Monto.Value"]: input.monto.value, ["Cantidad.MatchMode"]: input.cantidad.matchMode, ["Cantidad.Value"]: input.cantidad.value, creationTime: input.creationTime, fechaDesdePrecio: input.fechaDesdePrecio, fechaHastaPrecio: input.fechaHastaPrecio, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListSolicitudPagos = (input: GetListSolicitudPagosDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoporteSolicitudPagoDto>>({
      method: 'GET',
      url: '/api/app/soporte/solicitud-pagos',
      params: { ["UsuarioId.MatchMode"]: input.usuarioId.matchMode, ["UsuarioId.Value"]: input.usuarioId.value, ["CompraId.MatchMode"]: input.compraId.matchMode, ["CompraId.Value"]: input.compraId.value, ["Name.MatchMode"]: input.name.matchMode, ["Name.Value"]: input.name.value, ["Email.MatchMode"]: input.email.matchMode, ["Email.Value"]: input.email.value, creationTime: input.creationTime, estadoPago: input.estadoPago, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListUsuarios = (filtro: GetListUsuariosDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UsuarioDto>>({
      method: 'GET',
      url: '/api/app/soporte/usuarios',
      params: { ["UsuarioId.MatchMode"]: filtro.usuarioId.matchMode, ["UsuarioId.Value"]: filtro.usuarioId.value, ["Name.MatchMode"]: filtro.name.matchMode, ["Name.Value"]: filtro.name.value, ["Email.MatchMode"]: filtro.email.matchMode, ["Email.Value"]: filtro.email.value, tipoDoc: filtro.tipoDoc, ["Dni.MatchMode"]: filtro.dni.matchMode, ["Dni.Value"]: filtro.dni.value, ["PhoneNumber.MatchMode"]: filtro.phoneNumber.matchMode, ["PhoneNumber.Value"]: filtro.phoneNumber.value, creationTime: filtro.creationTime, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  reenviarNotificacion = (notiId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/soporte/reenviar-notificacion/${notiId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
