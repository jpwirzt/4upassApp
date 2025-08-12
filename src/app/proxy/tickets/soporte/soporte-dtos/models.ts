import type { EstadoCompra } from '../../entradas/estado-compra.enum';
import type { EstadoEvento } from '../../../estado-evento.enum';
import type { EstadoFuncion } from '../../../estado-funcion.enum';
import type { EstadoCortesia } from '../../../estado-cortesia.enum';
import type { TipoInvitacion } from '../../../tipo-invitacion.enum';
import type { EstadoEnvio } from '../../../estado-envio.enum';
import type { EstadoPago } from '../../solicitudes-pagos/estado-pago.enum';

export interface SoporteCompraDto {
  usuarioId?: string;
  compraId?: string;
  name?: string;
  numEntradas: number;
  creationTime?: string;
  estadoCompra: EstadoCompra;
  email?: string;
  phoneNumber?: string;
  nombreEvento?: string;
  fechaFuncion?: string;
}

export interface SoporteEventosDto {
  eventoId?: string;
  name?: string;
  creationTime?: string;
  estadoEvento: EstadoEvento;
  esCodigoAcceso?: boolean;
  tipoEvento?: boolean;
  duracion?: string;
}

export interface SoporteFuncionesDto {
  funcionId?: string;
  eventoId?: string;
  name?: string;
  creationTime?: string;
  fechaFuncion?: string;
  estadoFuncion: EstadoFuncion;
}

export interface SoporteInvitacionesDto {
  invitacionId?: string;
  funcionId?: string;
  compraId?: string;
  sectorId?: string;
  name?: string;
  email?: string;
  cantidad?: string;
  creationTime?: string;
  estadoCortesia: EstadoCortesia;
  tipoInvitacion: TipoInvitacion;
}

export interface SoporteNotificacionesDto {
  notisId?: string;
  usuarioId?: string;
  name?: string;
  creationTime?: string;
  estadoEnvio: EstadoEnvio;
  email?: string;
  error?: string;
  asunto?: string;
}

export interface SoporteSolicitudPagoDto {
  usuarioId?: string;
  compraId?: string;
  name?: string;
  creationTime?: string;
  estadoPago: EstadoPago;
  email?: string;
}
