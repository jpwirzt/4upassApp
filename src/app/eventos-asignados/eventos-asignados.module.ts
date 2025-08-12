import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventosAsignadosComponent } from './eventos-asignados.component';
import { EventosAsignadosRoutingModule } from './eventos-asignados-routing.module';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { EscanearQrComponent } from '../eventos-asignados-rol-seg/escanear-qr/escanear-qr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QrComponent } from '../qr/qr.component';


@NgModule({
  declarations: [EventosAsignadosComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EventosAsignadosRoutingModule,
    TableModule,
    TooltipModule,
    ReactiveFormsModule,
  ],
})
export class EventosAsignadosModule { }
