import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarcaronasPage } from './listarcaronas.page';

describe('ListarcaronasPage', () => {
  let component: ListarcaronasPage;
  let fixture: ComponentFixture<ListarcaronasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarcaronasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarcaronasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
