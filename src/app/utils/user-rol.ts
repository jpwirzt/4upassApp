import { ConfigStateService } from "@abp/ng.core";
import { Rol } from "@proxy";

export class UserRol{

static RolUsuario(config: ConfigStateService): Rol {
    const currentUser = config.getOne('currentUser');

    let rolUsuario: Rol;

    if (currentUser.roles.includes("administrador")) {
        rolUsuario = Rol.Administrador;
    } else if (currentUser.roles.includes("cliente")) {
        rolUsuario = Rol.Cliente;
    } else if (currentUser.roles.includes("comprador")) {
        rolUsuario = Rol.Comprador;
    } else {
        throw new Error("Rol desconocido para el usuario");
    }

    return rolUsuario;
    }

    static obtenerValorBinarioRol(nombre: string): number | null {
        switch (nombre.toLowerCase()) {
            case 'administrador': return 1;
            case 'comprador': return 2;
            case 'cliente': return 4;
            case 'seguridad': return 8;
            case 'rrpp': return 16;
            case 'sub_rrpp': return 32;
            default: return null;
        }
    }

    static descomponerRolesBinarios(valor: number): number[] {
        const roles = [];
        const rolValues = [
            Rol.Administrador,
            Rol.Comprador,
            Rol.Cliente,
            Rol.Seguridad,
            Rol.RRPP,
            Rol.SUB_RRPP,
        ];

        for (const rol of rolValues) {
            if ((valor & rol) === rol) {
                roles.push(rol);
            }
        }

        return roles;
    }

}


