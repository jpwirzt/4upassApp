import type { TipoDocs } from '../../usuario/tipo-docs.enum';
import type { Entidad } from '../entidades-externas/entidad.enum';

export interface SendEmailVentaDirectaDto {
  email?: string;
  compraId?: string;
  name?: string;
  tipoIdentificacion?: TipoDocs;
  dni?: string;
  entidad?: Entidad;
  timeZoneName?: string;
  solicitudPagoId?: string;
  usuarioId?: string;
  linkTicket?: string;
}
