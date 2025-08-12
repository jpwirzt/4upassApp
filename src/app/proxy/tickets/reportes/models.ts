import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface DatosSubRRPP {
  nombreSubRRPP?: string;
  cortesiaTransferible?: number;
  ventasDirectasCargadas?: number;
  totalVendidosLink?: number;
  totalRecaudadoLink?: number;
  cortesiasEnviadas?: number;
  totalRecaudadoVentaDirecta?: number;
}

export interface GetAllVentasRRPPDto extends EntityDto<string> {
  nombreRRPP?: string;
  cortesiaTransferible?: number;
  ventasDirectasCargadas?: number;
  totalVendidosLink?: number;
  totalRecaudadoLink?: number;
  cortesiasEnviadas?: number;
  totalRecaudadoVentaDirecta?: number;
  subRRPPs: DatosSubRRPP[];
}

export interface GetVentasRRPPAndSubRRPPDto extends PagedAndSortedResultRequestDto {
  eventoId?: string;
  funcionId?: string;
  search?: string;
}

export interface ReporteVentasExcelDto {
  nombreEvento?: string;
  fechaEvento?: string;
  excelFile: number[];
}
