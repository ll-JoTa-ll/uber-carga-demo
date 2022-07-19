import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarOfertaComponent } from './aceptar-oferta.component';

describe('AceptarOfertaComponent', () => {
  let component: AceptarOfertaComponent;
  let fixture: ComponentFixture<AceptarOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
