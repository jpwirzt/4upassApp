import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoSector {
  General = 1,
  Numerado = 2,
}

export const tipoSectorOptions = mapEnumToOptions(TipoSector);
