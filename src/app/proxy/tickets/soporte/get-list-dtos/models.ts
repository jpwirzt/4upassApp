import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { FiltroDto } from '../models';
import type { EstadoCompra } from '../../entradas/estado-compra.enum';
import type { EstadoEvento } from '../../../estado-evento.enum';
import type { EstadoFuncion } from '../../../estado-funcion.enum';
import type { EstadoCortesia } from '../../../estado-cortesia.enum';
import type { EstadoEnvio } from '../../../estado-envio.enum';
import type { EstadoPago } from '../../solicitudes-pagos/estado-pago.enum';
import type { TipoDocs } from '../../../usuario/tipo-docs.enum';

export interface GetListComprasDto extends PagedAndSortedResultRequestDto {
  usuarioId: FiltroDto;
  compraId: FiltroDto;
  name: FiltroDto;
  email: FiltroDto;
  creationTime?: string;
  numEntradas: FiltroDto;
  estadoCompra?: EstadoCompra;
  nombreEvento: FiltroDto;
  fechaFuncion?: string;
}

export interface GetListEventosDto extends PagedAndSortedResultRequestDto {
  eventoId: FiltroDto;
  name: FiltroDto;
  creationTime?: string;
  estadoEvento?: EstadoEvento;
}

export interface GetListFuncionesDto extends PagedAndSortedResultRequestDto {
  eventoId: FiltroDto;
  funcionId: FiltroDto;
  name: FiltroDto;
  creationTime?: string;
  fechaFuncion?: string;
  estadoFuncion?: EstadoFuncion;
}

export interface GetListInvitacionesDto extends PagedAndSortedResultRequestDto {
  invitacionId: FiltroDto;
  funcionId: FiltroDto;
  compraId: FiltroDto;
  sectorId: FiltroDto;
  name: FiltroDto;
  email: FiltroDto;
  cantidad: FiltroDto;
  creationTime?: string;
  estadoCortesia?: EstadoCortesia;
}

export interface GetListNotificacionesDto extends PagedAndSortedResultRequestDto {
  notisId: FiltroDto;
  usuarioId: FiltroDto;
  name: FiltroDto;
  email: FiltroDto;
  error: FiltroDto;
  creationTime?: string;
  estadoEnvio?: EstadoEnvio;
  asunto: FiltroDto;
}

export interface GetListPreciosDto extends PagedAndSortedResultRequestDto {
  precioId: FiltroDto;
  sectorId: FiltroDto;
  name: FiltroDto;
  monto: FiltroDto;
  cantidad: FiltroDto;
  creationTime?: string;
  fechaDesdePrecio?: string;
  fechaHastaPrecio?: string;
}

export interface GetListSolicitudPagosDto extends PagedAndSortedResultRequestDto {
  usuarioId: FiltroDto;
  compraId: FiltroDto;
  name: FiltroDto;
  email: FiltroDto;
  creationTime?: string;
  estadoPago?: EstadoPago;
}

export interface GetListUsuariosDto extends PagedAndSortedResultRequestDto {
  usuarioId: FiltroDto;
  name: FiltroDto;
  email: FiltroDto;
  tipoDoc?: TipoDocs;
  dni: FiltroDto;
  phoneNumber: FiltroDto;
  creationTime?: string;
}

export interface SoportePreciosDto extends PagedAndSortedResultRequestDto {
  precioId?: string;
  sectorId?: string;
  name?: string;
  monto?: string;
  cantidad?: string;
  creationTime?: string;
  fechaDesdePrecio?: string;
  fechaHastaPrecio?: string;
}
