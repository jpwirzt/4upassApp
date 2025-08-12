import type { ReporteVentasDto, ReporteVentasRequestDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetLiquidacionDto, LiquidacionDto } from '../compras/models';
import type { PagedResultWithData, ReporteDropdownsDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  apiName = 'Default';
  

  getLiquidacion = (input: GetLiquidacionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LiquidacionDto>({
      method: 'GET',
      url: '/api/app/compra/liquidacion',
      params: { eventoId: input.eventoId, funcionId: input.funcionId },
    },
    { apiName: this.apiName,...config });
  

  getMontoTotal = (funcionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: `/api/app/compra/monto-total/${funcionId}`,
    },
    { apiName: this.apiName,...config });
  

  getReporte = (input: ReporteVentasRequestDto, paginar: boolean = true, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultWithData<ReporteVentasDto, ReporteDropdownsDto>>({
      method: 'GET',
      url: '/api/app/compra/reporte',
      params: { eventoId: input.eventoId, rrppId: input.rrppId, desde: input.desde, hasta: input.hasta, timezoneName: input.timezoneName, filtroGlobal: input.filtroGlobal, funcionDropdown: input.funcionDropdown, sectorDropdown: input.sectorDropdown, rrpPsDropdown: input.rrpPsDropdown, tipoPrecioDropdown: input.tipoPrecioDropdown, metodoPagoDropdown: input.metodoPagoDropdown, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, paginar },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
