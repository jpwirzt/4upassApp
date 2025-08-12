import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  
import { EventosAsignadosRolSegRoutingModule } from './eventos-asignados-rol-seg-routing.module';
import { EventosAsignadosRolSegComponent } from './eventos-asignados-rol-seg.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { QrComponent } from '../qr/qr.component';
import { ControlEntradasManualComponent } from './control-entradas-manual/control-entradas-manual.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    EventosAsignadosRolSegComponent,EscanearQrComponent,ControlEntradasManualComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TableModule,
    TooltipModule,
    ReactiveFormsModule,
    EventosAsignadosRolSegRoutingModule,
    QrComponent,
    TooltipModule,
    AccordionModule,
    ButtonModule,
  ]
})
export class EventosAsignadosRolSegModule {}
