import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoEntrada {
  General = 1,
  Numerada = 2,
}

export const tipoEntradaOptions = mapEnumToOptions(TipoEntrada);
