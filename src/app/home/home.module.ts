import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { EventosAsignadosRolSegModule } from '../eventos-asignados-rol-seg/eventos-asignados-rol-seg.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EventosAsignadosRolSegModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
