import { mapEnumToOptions } from '@abp/ng.core';

export enum EstadoEvento {
  Borrador = 1,
  Activo = 2,
  Inactivo = 3,
  Pasado = 4,
  Cancelado = 5,
  ALiquidar = 6,
  Liquidado = 7,
  PendientePago = 8,
  Cerrado = 9,
}

export const estadoEventoOptions = mapEnumToOptions(EstadoEvento);
