import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarusuarioPage } from './editarusuario.page';

describe('EditarusuarioPage', () => {
  let component: EditarusuarioPage;
  let fixture: ComponentFixture<EditarusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarusuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
