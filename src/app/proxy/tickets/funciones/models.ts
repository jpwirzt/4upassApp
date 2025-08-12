import type { EntityDto } from '@abp/ng.core';

export interface GetPrecioByFuncionDto {
  nombre?: string;
  descripcion?: string;
  sectorGen: SectorGen[];
}

export interface SectorGen extends EntityDto<string> {
  sectorId?: string;
  nombre?: string;
  descripcion?: string;
  monto: number;
  cantMax: number;
  cantMaxSector: number;
  agotado: boolean;
}
