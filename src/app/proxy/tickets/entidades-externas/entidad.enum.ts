import { mapEnumToOptions } from '@abp/ng.core';

export enum Entidad {
  Gratuita = 1,
  MacroClick = 2,
  MercadoPago = 4,
}

export const entidadOptions = mapEnumToOptions(Entidad);
