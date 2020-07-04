import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaronasAgendadasPage } from './caronas-agendadas.page';

describe('CaronasAgendadasPage', () => {
  let component: CaronasAgendadasPage;
  let fixture: ComponentFixture<CaronasAgendadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaronasAgendadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaronasAgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
