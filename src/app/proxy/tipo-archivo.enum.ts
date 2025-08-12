import { mapEnumToOptions } from '@abp/ng.core';

export enum TipoArchivo {
  Ninguno = 0,
  LinkYoutube = 1,
  LinkSpotify = 2,
  ImagenEstab = 4,
}

export const tipoArchivoOptions = mapEnumToOptions(TipoArchivo);
