import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoDescuento {
  Unico = 0,
  Multiple = 1,
  Usuario = 2,
  MultipleUsuario = 3,
}

export const tipoDescuentoOptions = mapEnumToOptions(TipoDescuento);
