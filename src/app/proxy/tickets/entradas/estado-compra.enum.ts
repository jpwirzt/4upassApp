import { mapEnumToOptions } from '@abp/ng.core';

export enum EstadoCompra {
  Creada = 0,
  EnPago = 1,
  Pagada = 2,
  Cancelada = 3,
  Vencida = 4,
  PendientePago = 5,
  ErrorPago = 6,
  Cortesia = 7,
  VentaDirecta = 8,
}

export const estadoCompraOptions = mapEnumToOptions(EstadoCompra);
