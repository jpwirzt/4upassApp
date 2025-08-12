import type { MetodosPago } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  apiName = 'Default';
  

  getMetodosPagoActivos = (compraId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MetodosPago>({
      method: 'GET',
      url: `/api/app/pagos/metodos-pago-activos/${compraId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
