import { mapEnumToOptions } from '@abp/ng.core';

export enum CategoriaEvento {
  None = 0,
  Otros = 1,
  Conciertos = 2,
  Familiar = 4,
  Deporte = 8,
  ComidaYBebida = 16,
  Noche = 32,
  Teatro = 64,
}

export const categoriaEventoOptions = mapEnumToOptions(CategoriaEvento);
