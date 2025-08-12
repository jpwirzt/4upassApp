import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoLiquidacion {
  Porcentaje = 0,
  Numerico = 1,
}

export const tipoLiquidacionOptions = mapEnumToOptions(TipoLiquidacion);
