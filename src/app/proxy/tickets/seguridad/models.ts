import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { TipoDocs } from '../../usuario/tipo-docs.enum';
import type { EventoDto } from '../eventos/models';

export interface AsignacionesSeguridadDto extends EntityDto {
  adminId?: string;
  seguridadUserId?: string;
  name?: string;
  dni?: string;
  email?: string;
  normalizedEmail?: string;
  phoneNumber?: string;
  tipoDoc?: TipoDocs;
}

export interface CreateUpdateSeguridadDto extends EntityDto<string> {
  name?: string;
  surname?: string;
  normalizedEmail?: string;
  email?: string;
  userName?: string;
  normalizedUserName?: string;
  phoneNumber?: string;
  dni?: string;
  tipoDoc?: TipoDocs;
  eventos: EventoDto[];
}

export interface GetSeguridadEventosFilterDto extends PagedAndSortedResultRequestDto {
  seguridadUserId?: string;
  nombre?: string;
}

export interface GetSeguridadListFilterDto extends PagedAndSortedResultRequestDto {
  dni?: string;
  name?: string;
  userName?: string;
  phoneNumber?: string;
  email?: string;
}

export interface GetSubRRPPListFilterDto extends PagedAndSortedResultRequestDto {
  name?: string;
}
