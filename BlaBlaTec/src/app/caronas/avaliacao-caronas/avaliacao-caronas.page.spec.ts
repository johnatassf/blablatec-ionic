import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvaliacaoCaronasPage } from './avaliacao-caronas.page';

describe('AvaliacaoCaronasPage', () => {
  let component: AvaliacaoCaronasPage;
  let fixture: ComponentFixture<AvaliacaoCaronasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoCaronasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliacaoCaronasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
