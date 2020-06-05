import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcurarCaronaPage } from './procurar-carona.page';

describe('ProcurarCaronaPage', () => {
  let component: ProcurarCaronaPage;
  let fixture: ComponentFixture<ProcurarCaronaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurarCaronaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcurarCaronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
