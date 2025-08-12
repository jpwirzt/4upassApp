import { mapEnumToOptions } from '@abp/ng.core';

export enum EstadoPago {
  EnPago = 0,
  Aprobado = 1,
  Obsoleto = 2,
  Cancelado = 2,
  Pendiente = 4,
}

export const estadoPagoOptions = mapEnumToOptions(EstadoPago);
