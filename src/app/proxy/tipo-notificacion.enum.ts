import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoNotificacion {
  Mail = 0,
  Inapp = 1,
}

export const tipoNotificacionOptions = mapEnumToOptions(TipoNotificacion);
