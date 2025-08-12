import { mapEnumToOptions } from '@abp/ng.core';

export enum EstadoPrecio {
  Activo = 1,
  Cerrado = 2,
  Agotado = 3,
  Cortesia = 4,
  VentaDirecta = 5,
}

export const estadoPrecioOptions = mapEnumToOptions(EstadoPrecio);
