import { LocalizationService } from "@abp/ng.core";
import { ValidatorFn, Validators } from "@angular/forms";
import { TipoDocs } from "../proxy/usuario";

export const TiposDocList = (localization: LocalizationService) => {
    return [
        { name: localization.instant('::DNI'), value: TipoDocs.DNI },
        { name: localization.instant('::CuilCuit'), value: TipoDocs.CUILCUIT },
        { name: localization.instant('::Cedula'), value: TipoDocs.Cedula },
        { name: localization.instant('::LibretaEnrolamiento'), value: TipoDocs.LibretaEnrolamiento },
        { name: localization.instant('::LibretaCivica'), value: TipoDocs.LibretaCivica },
        { name: localization.instant('::Extranjero'), value: TipoDocs.Extranjero },
    ];
};

export class DocIdentificacionUtils {
    // Validadores para input de documento de identificación
    static getValidators(tipoDoc: TipoDocs): ValidatorFn | null {
        switch (tipoDoc) {
            case TipoDocs.DNI:
            case TipoDocs.Cedula:
            case TipoDocs.LibretaCivica:
            case TipoDocs.LibretaEnrolamiento:
                return Validators.pattern((/^\d{8}$/));
            case TipoDocs.CUILCUIT:
                return Validators.pattern(/^\d{2}-\d{8}-\d{1}$/);
            case TipoDocs.Extranjero:
                return Validators.pattern(/^[A-Za-z0-9]{1,10}$/);
            default:
                return null;
        }
    }

    // Mask según el tipo de documento
    static getMask(tipoDoc: TipoDocs): '99-99999999-9' | '99999999' | 'a*999a999' | '' {
        switch (tipoDoc) {
            case TipoDocs.CUILCUIT:
                return '99-99999999-9';
            case TipoDocs.DNI:
            case TipoDocs.Cedula:
            case TipoDocs.LibretaCivica:
            case TipoDocs.LibretaEnrolamiento:
                return '99999999';
            case TipoDocs.Extranjero:
                return 'a*999a999';
            default:
                return '';
        }
    }
}