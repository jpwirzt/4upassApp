import { mapEnumToOptions } from '@abp/ng.core';

export enum FormaDescuento {
  Porcentaje = 0,
  Gratis = 1,
  DosPorUno = 2,
  TresPorDos = 3,
  Cortesia = 4,
}

export const formaDescuentoOptions = mapEnumToOptions(FormaDescuento);
