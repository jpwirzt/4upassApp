import { mapEnumToOptions } from '@abp/ng.core';

export enum EstadoCortesia {
  Borrador = 0,
  Enviado = 1,
  Fallido = 2,
  Pendiente = 3,
  InvitacionAceptada = 4,
  Enviando = 5,
  Anulada = 6,
  Escaneada = 7,
}

export const estadoCortesiaOptions = mapEnumToOptions(EstadoCortesia);
