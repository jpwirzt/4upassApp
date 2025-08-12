import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosAsignadosComponent } from './eventos-asignados.component';

const routes: Routes = [
  {
    path: ':seguridadId/eventos-asignados/:nombre',
    component: EventosAsignadosComponent
  },
  {
    path: '',
    component: EventosAsignadosComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventosAsignadosRoutingModule {}
