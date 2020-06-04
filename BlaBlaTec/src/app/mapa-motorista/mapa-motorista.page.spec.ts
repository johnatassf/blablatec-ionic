import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaMotoristaPage } from './mapa-motorista.page';

describe('MapaMotoristaPage', () => {
  let component: MapaMotoristaPage;
  let fixture: ComponentFixture<MapaMotoristaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMotoristaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaMotoristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
