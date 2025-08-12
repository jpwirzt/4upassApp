import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosAsignadosRolSegComponent } from './eventos-asignados-rol-seg.component';

describe('EventosAsignadosRolSegComponent', () => {
  let component: EventosAsignadosRolSegComponent;
  let fixture: ComponentFixture<EventosAsignadosRolSegComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosAsignadosRolSegComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosAsignadosRolSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
