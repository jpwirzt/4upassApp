import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { QrComponent } from '../qr/qr.component';
import { EscanearQrComponent } from '../eventos-asignados-rol-seg/escanear-qr/escanear-qr.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
