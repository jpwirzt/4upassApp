import { FilterMetadata } from "primeng/api";

// filtro-utils.ts
export function obtenerFiltros(filters: { [s: string]: FilterMetadata | FilterMetadata[] }): any {
    const filtros: any = {};

    for (const key in filters) {
        const filtro = filters[key];
        if (Array.isArray(filtro)) {
            if (filtro.length > 0 && filtro[0].value) {
                filtros[key] = procesarFiltro(filtro[0]);
            }
        } else {
            if (filtro.value) {
                filtros[key] = procesarFiltro(filtro);
            }
        }
    }
    return filtros;
}

function procesarFiltro(filtro: FilterMetadata) {
    const { value, matchMode } = filtro;
    if (!value) return null;

    return { matchMode, value };
}
