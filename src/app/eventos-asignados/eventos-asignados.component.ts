import { ConfigStateService, LocalizationService, PagedResultDto, PermissionService } from '@abp/ng.core';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEventosDestacadosDto } from '../proxy/tickets/eventos';
import { SeguridadService, GetSeguridadEventosFilterDto } from '../proxy/tickets/seguridad';
import { CustomModalService } from '../services/custom-modal.service'; 

@Component({
  selector: 'app-eventos-asignados',
  templateUrl: './eventos-asignados.component.html',
  styleUrls: ['./eventos-asignados.component.scss'],
})
export class EventosAsignadosComponent implements OnInit {

  cancelarMsg: string = '';
  data: PagedResultDto<any> = { items: [], totalCount: 0 };
  headers: any;
  nombre: any;
  name: string = '';
  maxRows: number = 10;
  skipCount: number = 0;
  sorting: string = '';
  editingRow: any = null;
  originalData: any = null;
  visibleModalPersonalizarHome: boolean = false;
  events: GetEventosDestacadosDto[] = [];
  selectedEvents: any = [];
  copiedSelectedEvents: any = [];
  showDiv: boolean = false;
  editMode: boolean = false;
  hasAccess: boolean = false;
  redirect: boolean = false;
  esCliente: boolean = false;
  esAdmin: boolean = false;
  allEventos: GetEventosDestacadosDto[] = [];
  urlDomain: string = '';
  linkTooltip: string = '';
  editarTooltip: string = '';
  verTooltip: string = '';
  configTooltip: string = '';
  statsTooltip: string = '';
  deleteTooltip: string = '';
  closeTooltip: string = '';
  saveTooltip: string = '';
  seguridadId: string | null;
  nombreSeguridad:string | null;
  eventColumn: string = '';

  constructor(
    private localizationService: LocalizationService,
    private location: Location,
    private router: Router,
    private config: ConfigStateService,
    private permissionsService: PermissionService,
    private seguridadService: SeguridadService,
    private ar: ActivatedRoute,
    private customModalService: CustomModalService
  ) {
    this.seguridadId = this.ar.snapshot.paramMap.get('seguridadId');  
    this.nombreSeguridad = this.ar.snapshot.paramMap.get('nombre');
  }

  ngOnInit(): void {
    // this.hasAccess =
    //   this.permissionsService.getGrantedPolicy('Tickets.Seguridad') &&
    //   this.permissionsService.getGrantedPolicy('Tickets.Seguridad.Crear') &&
    //   this.permissionsService.getGrantedPolicy('Tickets.Seguridad.Visualizar') &&
    //   this.permissionsService.getGrantedPolicy('Tickets.Seguridad.Editar') &&
    //   this.permissionsService.getGrantedPolicy('Tickets.Seguridad.Eliminar');

    // this.redirect = !this.hasAccess;

    // if (this.redirect) {
    //   this.router.navigate(['/']);
    // }

    const currentUser = this.config.getOne('currentUser');
    this.esAdmin = currentUser.roles?.includes('administrador');


    this.localization();
    this.getTableData();

    this.headers = [
      { field: 'nombre', header: this.eventColumn, width: '40%' }
    ];
  }

  getTableData() {
    const query: GetSeguridadEventosFilterDto = {
      maxResultCount: this.maxRows,
      skipCount: this.skipCount,
      sorting: this.sorting,
      nombre: this.name,
      seguridadUserId: this.seguridadId ?? undefined,
    }
    
    this.seguridadService.getSeguridadEventos(query)
      .subscribe(res => {
        console.log('Eventos asignados:', res);
        this.data.items = res.items;
        this.data.totalCount = res.totalCount;
      });
  }

  buscarSeguridades(event: any): void {
    this.skipCount = event.first ?? 0;
    this.sorting = event.sortField;
    if (event.sortOrder === -1 && this.sorting) {
      this.sorting += ' DESC';
    } else if (event.sortOrder === 1 && this.sorting) {
      this.sorting += ' ASC';
    }

    this.getTableData();
  }

  localization() {
    this.editarTooltip = this.localizationService.instant('::EditarSeguridad');
    this.verTooltip = this.localizationService.instant('::VerSeguridad');
    this.deleteTooltip = this.localizationService.instant('::EliminarSeguridad');
    this.eventColumn = this.localizationService.instant('::Name');
    (this.closeTooltip = 'Cancelar'), (this.saveTooltip = 'Guardar');
  }

  deleteRow(eventoId: any) {
    let mensajeTitulo = this.localizationService.instant('::EliminarSeguridadEventoMsg');
    let mensajeSubtitulo = this.localizationService.instant('::AccionDeshacer');
    let mensajeConfirmar = this.localizationService.instant('::Si');
    let mensajeCancelar = this.localizationService.instant('::No');

    this.customModalService.showCustomModal(
      mensajeTitulo,
      'warning',
      undefined,
      mensajeSubtitulo,
      mensajeConfirmar,
      mensajeCancelar,
      (retorno: boolean) => {
        if (retorno) {
          this.seguridadService.deleteSeguridadEvento(this.seguridadId ?? '', eventoId).subscribe({
            next: () => {
              let mensaje = this.localizationService.instant('::SeguridadEventoEliminado');
              this.customModalService.showCustomModal(mensaje, 'confirm');

              this.getTableData();
            },
          });
        }
      }
    );
  }

  back() {
    this.location.back();
  }

}
