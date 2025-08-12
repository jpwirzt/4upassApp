import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosAsignadosRolSegComponent } from './eventos-asignados-rol-seg.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { ControlContainer } from '@angular/forms';
import { ControlEntradasManualComponent } from './control-entradas-manual/control-entradas-manual.component';

const routes: Routes = [
  {
    path: '',
    component: EventosAsignadosRolSegComponent
  }, 
  {
    path: 'escanear/:eventoId',
    component: EscanearQrComponent
  },
  {
    path: 'control-manual',
    component:ControlEntradasManualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosAsignadosRolSegRoutingModule {}  