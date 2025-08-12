import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoDocs {
  DNI = 0,
  Cedula = 1,
  LibretaEnrolamiento = 2,
  LibretaCivica = 3,
  Extranjero = 4,
  CUILCUIT = 5,
}

export const tipoDocsOptions = mapEnumToOptions(TipoDocs);
