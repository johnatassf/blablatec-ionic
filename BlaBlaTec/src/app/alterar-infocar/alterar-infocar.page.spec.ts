import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterarInfocarPage } from './alterar-infocar.page';

describe('AlterarInfocarPage', () => {
  let component: AlterarInfocarPage;
  let fixture: ComponentFixture<AlterarInfocarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarInfocarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterarInfocarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
