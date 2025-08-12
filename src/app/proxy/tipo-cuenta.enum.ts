import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoCuenta {
  CuentaCorriente = 1,
  CajaAhorro = 2,
}

export const tipoCuentaOptions = mapEnumToOptions(TipoCuenta);
