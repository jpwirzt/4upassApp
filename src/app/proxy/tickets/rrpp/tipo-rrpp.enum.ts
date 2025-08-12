import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoRRPP {
  RRPP = 0,
  SubRRPP = 1,
}

export const tipoRRPPOptions = mapEnumToOptions(TipoRRPP);
