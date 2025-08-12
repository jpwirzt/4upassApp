import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheEventoService {

  constructor() { }

  saveCache(key: string, value: any): void {
    const obj = JSON.stringify({ value, fechaGuardado: Date.now() });
    localStorage.setItem(key, obj);
  }

  getCache(key: string): any {
    const filtros = localStorage.getItem(key);

    if (filtros) {
      const filtrosParse = JSON.parse(filtros);
      const currentTime = Date.now();
      
      return filtrosParse.value;
    } else {
      return null;
    }
  }
  
}
