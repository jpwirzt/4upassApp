import type { TipoCuenta } from '../../tipo-cuenta.enum';
import type { TipoDocs } from '../../usuario/tipo-docs.enum';
import type { Rol } from '../../rol.enum';
import type { EntityDto } from '@abp/ng.core';
import type { IdentityUserDto } from '../../volo/abp/identity/models';

export interface AddDatosBancariosDto {
  email?: string;
  titularCuenta?: string;
  cuilBancario?: string;
  nameBanco?: string;
  tipoCuenta: TipoCuenta;
  cbu?: string;
  cuentaPrincipal: boolean;
}

export interface CreateUsuarioDto {
  name?: string;
  phone?: string;
  email?: string;
  identificationType: TipoDocs;
  dni?: string;
  rol: Rol;
  contraseña?: string;
  titularCuenta?: string;
  cuilBancario?: string;
  nameBanco?: string;
  tipoCuenta?: string;
  cbu?: string;
}

export interface DatosBancariosDto extends EntityDto<string> {
  userId?: string;
  titular?: string;
  cuit?: string;
  banco?: string;
  tipoDeCuenta: TipoCuenta;
  cbu?: string;
  esPrincipal: boolean;
}

export interface EditUsuarioDto {
  usuarioId?: string;
  name?: string;
  dni?: string;
  surname?: string;
  phoneNumber?: string;
  userName?: string;
  rol?: Rol;
  tipoDoc?: TipoDocs;
  fechaNacimiento?: string;
  contraseña?: string;
  email?: string;
}

export interface UsuarioDto extends IdentityUserDto {
  rol: Rol;
  dni?: string;
  tienePassword: boolean;
  usuarioId?: string;
  tipoDoc: TipoDocs;
  compraId?: string;
}
