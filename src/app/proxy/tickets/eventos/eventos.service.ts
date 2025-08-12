import type { BuscarFuncionesDto, CodigoSectorDto, ConfiguracionDto, CortesiaDeEventos, CreateUpdateEventoDto, DatosCortesiaDto, DatosEventoEntradas, DtoReturnErrorData, EventoCarouselDto, EventoDropdownDto, EventoDto, EventoFuncionesDto, EventoSingleDto, EventosCortesiaDto, EventosPorFuncionActivaDto, EventosPorFuncionActivaFilterDto, GetClientEventsDto, GetComprasDto, GetEventoDetalleDto, GetEventosDestacadosDto, GetEventosListFilterDto, MisEventosDto, PedidosDto, PreciosSectoresDto, ReturnEventoDto, UpdateCarrouselDto, getEventoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ArchivoDto } from '../archivos/models';
import type { CreateDescuentoPrecio } from '../descuentos/models';
import type { SectorDto } from '../establecimientos/models';
import type { EstadoPrecio } from '../../estado-precio.enum';
import type { GetIdDto } from '../models';
import type { CarrouselDto, CortesiaInputDto, EventoConFuncionesDto, GetEventoWithCortesiaDto, GetEventosWithCortesiaDto, UpdateCortesiaInputDto } from '../../models';
import type { Rol } from '../../rol.enum';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  apiName = 'Default';
  

  codigoUsado = (codigos: string[], eventoId: string, compraId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/eventos/codigo-usado',
      params: { eventoId, compraId },
      body: codigos,
    },
    { apiName: this.apiName,...config });
  

  create = (input: getEventoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, getEventoDto>({
      method: 'POST',
      url: '/api/app/eventos',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createEvento = (input: CreateUpdateEventoDto, eventoIdStr: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReturnEventoDto>({
      method: 'POST',
      url: '/api/app/eventos/evento',
      params: { eventoIdStr },
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/eventos/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteDetailsAndOneEventoWithCortesia = (cortesiaId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/eventos/details-and-one-evento-with-cortesia/${cortesiaId}`,
    },
    { apiName: this.apiName,...config });
  

  esCodigoAcceso = (funcionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/app/eventos/es-codigo-acceso/${funcionId}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, getEventoDto>({
      method: 'GET',
      url: `/api/app/eventos/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCarrousel = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CarrouselDto[]>({
      method: 'GET',
      url: '/api/app/eventos/carrousel',
    },
    { apiName: this.apiName,...config });
  

  getCompras = (dto: GetComprasDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PedidosDto>>({
      method: 'GET',
      url: '/api/app/eventos/compras',
      params: { misPedidos: dto.misPedidos, skipCount: dto.skipCount, maxResultCount: dto.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getDatosEventosEntradas = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DatosEventoEntradas>({
      method: 'GET',
      url: `/api/app/eventos/datos-eventos-entradas/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  getDetailsWithCortesia = (input: CortesiaInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventosCortesiaDto>>({
      method: 'GET',
      url: '/api/app/eventos/details-with-cortesia',
      params: { nombre: input.nombre, email: input.email, dni: input.dni, telefono: input.telefono, funcionId: input.funcionId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getEvento = (eventoId: string, precioVigente?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoSingleDto>({
      method: 'GET',
      url: `/api/app/eventos/evento/${eventoId}`,
      params: { precioVigente },
    },
    { apiName: this.apiName,...config });
  

  getEventoDetalle = (eventoId: string, estados?: EstadoPrecio[], rrppId?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetEventoDetalleDto>({
      method: 'GET',
      url: '/api/app/eventos/evento-detalle',
      params: { eventoId, estados, rrppId },
    },
    { apiName: this.apiName,...config });
  

  getEventoUpd = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoSingleDto>({
      method: 'GET',
      url: `/api/app/eventos/evento-upd/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  getEventosAsignadosIds = (RRPPId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: `/api/app/eventos/eventos-asignados-ids/${RRPPId}`,
    },
    { apiName: this.apiName,...config });
  

  getEventosDestacados = (clienteId: string, rolUsuario: Rol, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetEventosDestacadosDto[]>({
      method: 'GET',
      url: `/api/app/eventos/eventos-destacados/${clienteId}`,
      params: { rolUsuario },
    },
    { apiName: this.apiName,...config });
  

  getEventosOneRRPP = (dto: GetClientEventsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoDto[]>({
      method: 'GET',
      url: '/api/app/eventos/eventos-one-rRPP',
      params: { rrppId: dto.rrppId, soloActivos: dto.soloActivos, soloEventosParaVentaOnline: dto.soloEventosParaVentaOnline },
    },
    { apiName: this.apiName,...config });
  

  getEventosWithCortesia = (filtro: GetEventosWithCortesiaDto, clienteId: string, rolUsuario: Rol, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CortesiaDeEventos>>({
      method: 'GET',
      url: `/api/app/eventos/eventos-with-cortesia/${clienteId}`,
      params: { nombre: filtro.nombre, fecha: filtro.fecha, search: filtro.search, rrppId: filtro.rrppId, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount, rolUsuario },
    },
    { apiName: this.apiName,...config });
  

  getEventosWithCortesiaRRPP = (filtro: GetEventosWithCortesiaDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CortesiaDeEventos>>({
      method: 'GET',
      url: '/api/app/eventos/eventos-with-cortesia-rRPP',
      params: { nombre: filtro.nombre, fecha: filtro.fecha, search: filtro.search, rrppId: filtro.rrppId, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getFeatured = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventoCarouselDto>>({
      method: 'GET',
      url: '/api/app/eventos/featured',
    },
    { apiName: this.apiName,...config });
  

  getFuncionesAndPreciosDeSectoresByEventoId = (eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoFuncionesDto>({
      method: 'GET',
      url: `/api/app/eventos/funciones-and-precios-de-sectores/${eventoId}`,
    },
    { apiName: this.apiName,...config });
  

  getImagen = (imageId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArchivoDto>({
      method: 'GET',
      url: `/api/app/eventos/imagen/${imageId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (eventoInput: GetEventosListFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<getEventoDto>>({
      method: 'GET',
      url: '/api/app/eventos',
      params: { nombre: eventoInput.nombre, idProvincia: eventoInput.idProvincia, idLocalidad: eventoInput.idLocalidad, fecha: eventoInput.fecha, categoria: eventoInput.categoria, estadoFuncion: eventoInput.estadoFuncion, sorting: eventoInput.sorting, skipCount: eventoInput.skipCount, maxResultCount: eventoInput.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListEventos = (filtro: GetEventosListFilterDto, clienteId: string, rolUsuario: Rol, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MisEventosDto>>({
      method: 'GET',
      url: `/api/app/eventos/eventos/${clienteId}`,
      params: { nombre: filtro.nombre, idProvincia: filtro.idProvincia, idLocalidad: filtro.idLocalidad, fecha: filtro.fecha, categoria: filtro.categoria, estadoFuncion: filtro.estadoFuncion, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount, rolUsuario },
    },
    { apiName: this.apiName,...config });
  

  getListEventosActivos = (filtro: GetEventosListFilterDto, clienteId: string, rolUsuario: Rol, conPrecio?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<BuscarFuncionesDto>>({
      method: 'GET',
      url: `/api/app/eventos/eventos-activos/${clienteId}`,
      params: { nombre: filtro.nombre, idProvincia: filtro.idProvincia, idLocalidad: filtro.idLocalidad, fecha: filtro.fecha, categoria: filtro.categoria, estadoFuncion: filtro.estadoFuncion, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount, rolUsuario, conPrecio },
    },
    { apiName: this.apiName,...config });
  

  getListEventosConFuncionesLiquidacion = (input: GetIdDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoConFuncionesDto[]>({
      method: 'GET',
      url: '/api/app/eventos/eventos-con-funciones-liquidacion',
      params: { id: input.id },
    },
    { apiName: this.apiName,...config });
  

  getListEventosPorFuncionActiva = (filtro: EventosPorFuncionActivaFilterDto, timezoneName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<EventosPorFuncionActivaDto>>({
      method: 'GET',
      url: '/api/app/eventos/eventos-por-funcion-activa',
      params: { nombre: filtro.nombre, estado: filtro.estado, tipo: filtro.tipo, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount, timezoneName },
    },
    { apiName: this.apiName,...config });
  

  getOneEventoWithCortesia = (filtro: GetEventoWithCortesiaDto, funcionId: string, clienteId: string, rolUsuario: Rol, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DatosCortesiaDto>>({
      method: 'GET',
      url: '/api/app/eventos/one-evento-with-cortesia',
      params: { nombreUsuario: filtro.nombreUsuario, nombre: filtro.nombre, email: filtro.email, sector: filtro.sector, cantidad: filtro.cantidad, fecha: filtro.fecha, estado: filtro.estado, estadosSeleccionados: filtro.estadosSeleccionados, tipo: filtro.tipo, preciosGroups: filtro.preciosGroups, sectores: filtro.sectores, subRRPPs: filtro.subRRPPs, sorting: filtro.sorting, skipCount: filtro.skipCount, maxResultCount: filtro.maxResultCount, funcionId, clienteId, rolUsuario },
    },
    { apiName: this.apiName,...config });
  

  getSectoresByFuncion = (funcionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SectorDto[]>({
      method: 'GET',
      url: `/api/app/eventos/sectores-by-funcion/${funcionId}`,
    },
    { apiName: this.apiName,...config });
  

  getUserEventosList = (dto: GetClientEventsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventoDropdownDto[]>({
      method: 'GET',
      url: '/api/app/eventos/user-eventos-list',
      params: { rrppId: dto.rrppId, soloActivos: dto.soloActivos, soloEventosParaVentaOnline: dto.soloEventosParaVentaOnline },
    },
    { apiName: this.apiName,...config });
  

  registrarPrecioDescuento = (eventoId: string, input: CreateDescuentoPrecio, esEdit?: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/app/eventos/registrar-precio-descuento/${eventoId}`,
      params: { esEdit },
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: getEventoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, getEventoDto>({
      method: 'PUT',
      url: `/api/app/eventos/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateCarrousel = (input: UpdateCarrouselDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/eventos/carrousel',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateConfiguracionGeneralByIdAndConfiguracionDto = (id: string, configuracionDto: ConfiguracionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/eventos/${id}/configuracion-general`,
      body: configuracionDto,
    },
    { apiName: this.apiName,...config });
  

  updateDetailsAndOneEventoWithCortesia = (input: UpdateCortesiaInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/eventos/details-and-one-evento-with-cortesia',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateEvento = (Input: CreateUpdateEventoDto, EventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/eventos/evento/${EventoId}`,
      body: Input,
    },
    { apiName: this.apiName,...config });
  

  updatePrecioDescuento = (eventoId: string, input: CreateDescuentoPrecio, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'PUT',
      responseType: 'text',
      url: `/api/app/eventos/precio-descuento/${eventoId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updatePreciosDeSectoresByEventoIdAndPreciosSectoresDtoList = (eventoId: string, preciosSectoresDtoList: PreciosSectoresDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/eventos/precios-de-sectores/${eventoId}`,
      body: preciosSectoresDtoList,
    },
    { apiName: this.apiName,...config });
  

  verificarCodigoAcceso = (codigo: string, eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnErrorData<boolean>>({
      method: 'POST',
      url: `/api/app/eventos/verificar-codigo-acceso/${eventoId}`,
      params: { codigo },
    },
    { apiName: this.apiName,...config });
  

  verificarVariosCodigosAcceso = (codigosSectores: CodigoSectorDto[], eventoId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DtoReturnErrorData<ListResultDto<boolean>>>({
      method: 'POST',
      url: `/api/app/eventos/verificar-varios-codigos-acceso/${eventoId}`,
      body: codigosSectores,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
