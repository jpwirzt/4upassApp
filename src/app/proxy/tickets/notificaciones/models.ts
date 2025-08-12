import type { CreationAuditedEntityDto } from '@abp/ng.core';
import type { EstadoEnvio } from '../../estado-envio.enum';
import type { TipoNotificacion } from '../../tipo-notificacion.enum';

export interface NotificacionesDto extends CreationAuditedEntityDto<string> {
  userId?: string;
  asunto?: string;
  contenido?: string;
  estado: EstadoEnvio;
  tipo: TipoNotificacion;
  intentos: number;
  adjunto: number[];
  isHtml: boolean;
  leida: boolean;
  imageUrl?: string;
}
