import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlEntradasManualComponent } from './control-entradas-manual.component';

describe('ControlEntradasManualComponent', () => {
  let component: ControlEntradasManualComponent;
  let fixture: ComponentFixture<ControlEntradasManualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEntradasManualComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlEntradasManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
