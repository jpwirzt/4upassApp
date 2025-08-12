import type { SendEmailVentaDirectaDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CompraDto, IniciarCompraDto } from '../entradas/models';
import type { SolicitudPagoDto } from '../pagos/models';

@Injectable({
  providedIn: 'root',
})
export class VentaDirectaService {
  apiName = 'Default';
  

  generarSolicitud = (finalizarCompraDto: SendEmailVentaDirectaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SolicitudPagoDto>({
      method: 'POST',
      url: '/api/app/venta-directa/generar-solicitud',
      body: finalizarCompraDto,
    },
    { apiName: this.apiName,...config });
  

  iniciarCompraVentaDirecta = (iniciarCompraDto: IniciarCompraDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompraDto>({
      method: 'POST',
      url: '/api/app/venta-directa/iniciar-compra-venta-directa',
      body: iniciarCompraDto,
    },
    { apiName: this.apiName,...config });
  

  updateYFinalizarCompraVentaDirecta = (dto: SendEmailVentaDirectaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/venta-directa/y-finalizar-compra-venta-directa',
      body: dto,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
