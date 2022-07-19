import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasOfertasComponent } from './rutas-ofertas.component';

describe('RutasOfertasComponent', () => {
  let component: RutasOfertasComponent;
  let fixture: ComponentFixture<RutasOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
