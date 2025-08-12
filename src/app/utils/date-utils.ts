export class DateUtils{
    static IsoString(fecha: string): Date {
        const ultimaLetra = fecha.charAt(-1);
        if (ultimaLetra !== 'Z') {
            fecha += 'Z';
        }
        return new Date(fecha);
    }

    static DateToIsoStringWithCustomTime(fecha: Date, horas: number = 0, minutos: number = 0, segundos: number = 0): string {
        const hs = String(horas).padStart(2, '0');
        const min = String(minutos).padStart(2, '0');
        const seg = String(segundos).padStart(2, '0');
        return fecha.toISOString().split('T')[0] + `T${hs}:${min}:${seg}.000Z`;
    }
}