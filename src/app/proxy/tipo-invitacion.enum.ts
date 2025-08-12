import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoInvitacion {
  Cortesia = 0,
  CodigoaAccesoUnico = 1,
}

export const tipoInvitacionOptions = mapEnumToOptions(TipoInvitacion);
