import type { TipoInvitacion } from '../../tipo-invitacion.enum';
import type { CreationAuditedEntityDto, EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { EstadoCortesia } from '../../estado-cortesia.enum';
import type { EstadoEvento } from '../../estado-evento.enum';
import type { ArchivoDto } from '../archivos/models';
import type { CreateSectorDto, EstablecimientoDto, EstablecimientoNoTrackDto, SectorNoTrackGeneralDto, SectorNoTrackNumeradoDto } from '../establecimientos/models';
import type { CategoriaEvento } from '../../categoria-evento.enum';
import type { RRPPUserDto, SeguridadUserDto } from '../../models';
import type { EstadoPrecio } from '../../estado-precio.enum';
import type { EstadoFuncion } from '../../estado-funcion.enum';
import type { EntradasDto } from '../entradas/models';
import type { PrecioDto, PrecioNoTrackDto } from '../precios/models';
import type { DescuentoDto } from '../descuentos/models';
import type { EstadoCompra } from '../entradas/estado-compra.enum';
import type { TipoEntrada } from '../entradas/tipo-entrada.enum';
import type { TipoSector } from '../establecimientos/tipo-sector.enum';
import type { TipoArchivo } from '../../tipo-archivo.enum';

export interface BuscarFuncionesDto {
  nombre?: string;
  funcionId?: string;
  eventoId?: string;
  tipo: TipoInvitacion;
  codigo: boolean;
  precios: PrecioDeEventoSeleccionadoDto[];
  fecha?: string;
}

export interface CodigoSectorDto {
  sectorId?: string;
  codigo?: string;
}

export interface ConfiguracionDto {
  cantidadMaximaEntradas: number;
  tiempoPantallaUsuario: number;
  anularSectores: SectorCfgDto[];
}

export interface CortesiaDeEventos {
  id?: string;
  ventaDirectaId?: string;
  rrppId?: string;
  nombre?: string;
  fecha?: string;
  precio?: string;
  sector?: string;
  cantidadCortesias: number;
}

export interface CreateFuncionDto extends EntityDto<string> {
  fecha?: string;
  eventoId?: string;
}

export interface CreateUpdateEventoDto {
  paso1: paso1;
  paso2: paso2;
}

export interface DatosCortesiaDto extends EntityDto<string> {
  sectorId?: string;
  nombreUsuario?: string;
  nombreSector?: string;
  email?: string;
  cantidad: number;
  fecha?: string;
  estado: EstadoCortesia;
  estadoEvento: EstadoEvento;
  tipo: TipoInvitacion;
  idSubRRPP?: string;
  nombreSubRRPP?: string;
  tipoPrecio?: string;
}

export interface DatosEventoEntradas extends EntityDto<string> {
  nombre?: string;
  imagenEstablecimiento?: string;
  urlYoutube?: string;
  urlSpotify?: string;
  cantidadEntradasPorUser: number;
  tiempoDeCompra: number;
  imagenesDetalles: ArchivoDto[];
  terminos?: string;
  esPrivado: boolean;
  esCodigoAcceso: boolean;
}

export interface DtoReturnErrorData<T> {
  exitoso: boolean;
  mensajeError?: string;
  value: T;
}

export interface EventoCarouselDto extends EntityDto<string> {
  nombre?: string;
  descripcion?: string;
  imagenesDetalle: ArchivoDto[];
  imageBannerId?: string;
  imageHomeId?: string;
  imageBannerUrl?: string;
  imageHomeUrl?: string;
  isInCarrousel?: boolean;
  pocasEntradas: boolean;
  sinEntradas: boolean;
}

export interface EventoDropdownDto extends EntityDto<string> {
  nombre?: string;
  creatorId?: string;
}

export interface EventoDto extends FullAuditedEntityDto<string> {
  nombre?: string;
  descripcion?: string;
  observaciones?: string;
  nombreNormalizado?: string;
  establecimientoId?: string;
  estado: EstadoEvento;
  establecimiento: EstablecimientoDto;
  funciones: FuncionDto[];
  precioDesde: number;
  proximaFuncion?: string;
  totalVendidas?: number;
  ubicacion?: string;
  cantidadEntradasPorUsuario?: number;
  categorias: CategoriaEvento;
  fechaEfectiva?: string;
  imageBannerId?: string;
  imageHomeId?: string;
  imagenesDetalle: ArchivoDto[];
  esPrivado: boolean;
  pasoDeFecha?: boolean;
  nombreCreador?: string;
}

export interface EventoFuncionesDto {
  id?: string;
  nombre?: string;
  cantidadEntradasPorUsuario: number;
  tiempoParaComprar: number;
  funciones: FuncionesPreciosDto[];
}

export interface EventoSingleDto extends CreationAuditedEntityDto<string> {
  nombre?: string;
  descripcion?: string;
  observaciones?: string;
  fechaEfectiva?: string;
  tiempoDeCompra: number;
  terminos?: string;
  cantidadEntradasPorUsuario: number;
  establecimiento: EstablecimientoNoTrackDto;
  funciones: FuncionNoTrackDto[];
  imagenesDetalles: ArchivoDto[];
  imagenBanner: ArchivoDto;
  imagenHome: ArchivoDto;
  esPrivado: boolean;
  esCodigoAcceso: boolean;
  esMayorEdad: boolean;
  categorias: CategoriaEvento[];
  duracion?: string;
  usuariosSeguridadSeleccionados: SeguridadUserDto[];
  usuariosRRPPSeleccionados: RRPPUserDto[];
}

export interface EventosCortesiaDto extends EntityDto<string> {
  nombre?: string;
  email?: string;
  dni?: string;
  telefono?: string;
}

export interface EventosPorFuncionActivaDto {
  funcionId?: string;
  eventoId?: string;
  creatorId?: string;
  nombreEvento?: string;
  funcionFecha?: string;
  inputLabel?: string;
  estadoPrecio: number;
}

export interface EventosPorFuncionActivaFilterDto extends PagedAndSortedResultRequestDto {
  nombre?: string;
  estado: EstadoPrecio[];
  tipo?: string;
}

export interface FechasEfectivasEventoDetalle {
  fechaEfectiva?: string;
  disponible: boolean;
}

export interface FuncionDto extends FullAuditedEntityDto<string> {
  fecha?: string;
  evento: EventoDto;
  eventoId?: string;
  estado: EstadoFuncion;
  fechaCambioEstado?: string;
  entradas: EntradasDto[];
  precios: PrecioDto[];
}

export interface FuncionNoTrackDto {
  funcionId?: string;
  fecha?: string;
  eventoId?: string;
  precios: PrecioNoTrackDto[];
  sectorNum: SectorNoTrackNumeradoDto[];
  sectorGen: SectorNoTrackGeneralDto[];
  agotada: boolean;
}

export interface FuncionesEventoDetalle {
  funcionId?: string;
  fecha?: string;
  eventoId?: string;
  precios: FechasEfectivasEventoDetalle[];
  sectorNum: SectorNoTrackNumeradoDto[];
  sectorGen: SectorGenEntDisp[];
  agotada: boolean;
}

export interface FuncionesPreciosDto {
  funcionId?: string;
  fecha?: string;
  eventoId?: string;
  precios: PrecioDetallesDto[];
  nombre?: string;
  descuentos: DescuentoDto[];
}

export interface GetClientEventsDto {
  rrppId?: string;
  soloActivos: boolean;
  soloEventosParaVentaOnline?: boolean;
}

export interface GetComprasDto extends PagedResultRequestDto {
  misPedidos: boolean;
}

export interface GetEventoDetalleDto {
  nombre?: string;
  descripcion?: string;
  observaciones?: string;
  fechaEfectiva?: string;
  terminos?: string;
  funciones: FuncionesEventoDetalle[];
  imagenesDetalles: ArchivoDto[];
  imagenBanner: ArchivoDto;
  imagenHome: ArchivoDto;
  esPrivado: boolean;
  esCodigoAcceso: boolean;
  esMayorEdad: boolean;
  duracion?: string;
}

export interface GetEventosDestacadosDto extends EntityDto<string> {
  nombre?: string;
  imageBannerId?: string;
  imageHomeId?: string;
  imagenesDetalle: ArchivoDto[];
  esPrivado: boolean;
  estado: EstadoEvento;
}

export interface GetEventosListFilterDto extends PagedAndSortedResultRequestDto {
  nombre?: string;
  idProvincia?: number;
  idLocalidad?: string;
  fecha?: string;
  categoria?: CategoriaEvento;
  estadoFuncion?: EstadoFuncion;
}

export interface MisEventosDto extends EntityDto<string> {
  nombre?: string;
  nombreCreador?: string;
  creationTime?: string;
  esPrivado: boolean;
  funciones: MisFuncionesDto[];
}

export interface MisFuncionesDto {
  id?: string;
  fecha?: string;
  estado: EstadoFuncion;
}

export interface PedidosCompraDto {
  id?: string;
  entradas: PedidosEntradasDto[];
  numEntradas: number;
  estado: EstadoCompra;
  referenciaExterna?: string;
  cae?: boolean;
  descuento: number;
}

export interface PedidosDto {
  compra: PedidosCompraDto;
  funcion: PedidosFuncionDto;
  evento: PedidosEventoDto;
}

export interface PedidosEntradasDto {
  tipo: TipoEntrada;
  funcionId?: string;
  precioId?: string;
  compraId?: string;
  sectorId?: string;
}

export interface PedidosEstabDto {
  id?: string;
  nombre?: string;
  ubicacion?: string;
  sectores: PedidosSectorDto[];
}

export interface PedidosEventoDto {
  id?: string;
  nombre?: string;
  observaciones?: string;
  descripcion?: string;
  establecimiento: PedidosEstabDto;
  servicio: number;
}

export interface PedidosFuncionDto {
  eventoId?: string;
  fecha?: string;
  cortesiaConPrecio: boolean;
}

export interface PedidosPreciosDto {
  fechaEfectiva?: string;
  monto: number;
  sectorId?: string;
  funcionId?: string;
}

export interface PedidosSectorDto {
  id?: string;
  nombre?: string;
  guiaMapa?: string;
  tipo: TipoSector;
  establecimientoId?: string;
  precios: PedidosPreciosDto[];
}

export interface PrecioDeEventoSeleccionadoDto {
  nombre?: string;
  estado: EstadoPrecio;
  funcionId?: string;
  sectores: SectorDeEventoSeleccionadoDto[];
}

export interface PrecioDetalleDto {
  sectorId?: string;
  sectorNombre?: string;
  monto: number;
  fechaEfectiva?: string;
  funcionId?: string;
  sectorAnulado: boolean;
}

export interface PrecioDetallesDto {
  nombrePrecio?: string;
  detalles: PrecioDetalleDto[];
}

export interface PreciosSectoresDto {
  sectorId?: string;
  funcionId?: string;
  sectorNombre?: string;
  monto?: number;
  nombrePrecio?: string;
  fechaEfectiva?: string;
}

export interface ReturnEventoDto {
  eventoId?: string;
  establecimientoId?: string;
  sectores: sectorPersonalizado[];
}

export interface SectorCfgDto {
  sectorId?: string;
  sectorAnulado: boolean;
}

export interface SectorDeEventoSeleccionadoDto extends EntityDto<string> {
  nombre?: string;
  precioId?: string;
  cortesia?: number;
}

export interface SectorGenEntDisp {
  capacidad: number;
  cantEntr: number;
  entradasDisponibles: number;
  pocasEntradas: boolean;
  sinEntradas: boolean;
}

export interface UpdateCarrouselDto {
  id?: string;
  eventoIds: string[];
  tiempoFrente: number;
}

export interface getEventoDto extends EntityDto<string> {
  nombre?: string;
  estado: EstadoEvento;
  tiempoDeCompra: number;
  descripcion?: string;
  observaciones?: string;
  establecimientoId?: string;
  precioDesde?: number;
  proximaFuncion?: string;
  ubicacion?: string;
  imagenesDetalle: ArchivoDto[];
  imageBannerId?: string;
  imageHomeId?: string;
  imageBannerUrl?: string;
  imageHomeUrl?: string;
  isInCarrousel?: boolean;
  creatorId?: string;
  cantidadEntradasPorUsuario: number;
  pocasEntradas: boolean;
  sinEntradas: boolean;
  duracion?: string;
  esGratis?: boolean;
}

export interface paso1 {
  nombre?: string;
  funciones: CreateFuncionDto[];
  fechaDisponibilidad?: string;
  descripcion?: string;
  observaciones?: string;
  terminosYCond?: string;
  establecimientoId?: string;
  categorias: CategoriaEvento[];
  imagenHomeId?: string;
  imagenHome: ArchivoDto;
  imagenesDetalle: ArchivoDto[];
  imagenBannerId?: string;
  imagenBanner: ArchivoDto;
  esPrivado: boolean;
  esCodigoAcceso: boolean;
  esMayorEdad: boolean;
  duracion?: string;
  seguridadIds: string[];
  rrppIds: string[];
}

export interface paso2 {
  nombre?: string;
  idProvincia: number;
  idPais?: string;
  descProvincia?: string;
  idLocalidad?: string;
  descLocalidad?: string;
  ubicacion?: string;
  idImage?: string;
  nombreImg?: string;
  urlImg?: string;
  urlYoutube?: string;
  urlSpotify?: string;
  tipoArchivo: TipoArchivo;
  sectores: CreateSectorDto[];
}

export interface sectorPersonalizado {
  id?: string;
  nombre?: string;
  sectorAnulado: boolean;
  capacidad?: number;
}

export interface CortesiaSectoresIdDto {
  funcionId?: string;
  compraId?: string;
  nombre?: string;
  email?: string;
  normalizedEmail?: string;
  sectorId?: string;
  cantidad: number;
  estado: EstadoCortesia;
  notificacionId?: string;
  tipo: TipoInvitacion;
}

export interface DtoReturnError {
  exitoso: boolean;
  mensajeError?: string;
}

export interface EventoRRPPDto extends EntityDto<string> {
  nombre?: string;
  proximaFuncion?: string;
  creatorId?: string;
  ventaDirectaId?: string;
  totalVendidas?: number;
  totalVentaDirecta?: number;
  pasoDeFecha?: boolean;
  ubicacion?: string;
  esVentaDirecta: boolean;
  esReferido: boolean;
  tieneSubRRPPs: boolean;
  precioIds: string[];
  sectorIds: string[];
  funcionIds: string[];
}

export interface SendCortesiasDto {
  cortesiaIds: string[];
  timeZoneName?: string;
}
