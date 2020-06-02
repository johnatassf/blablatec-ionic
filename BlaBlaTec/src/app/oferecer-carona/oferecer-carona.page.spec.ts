import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OferecerCaronaPage } from './oferecer-carona.page';

describe('OferecerCaronaPage', () => {
  let component: OferecerCaronaPage;
  let fixture: ComponentFixture<OferecerCaronaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OferecerCaronaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OferecerCaronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
