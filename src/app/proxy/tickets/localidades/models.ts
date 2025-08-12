import type { EntityDto } from '@abp/ng.core';

export interface LocalidadProvinciaDto {
  idLocalidad?: string;
  idPais?: string;
  idProvincia: number;
  localidad?: string;
  provincia?: string;
  nombreCompleto?: string;
}

export interface PaisesDto extends EntityDto<string> {
  nombre?: string;
  timeZone?: string;
}
