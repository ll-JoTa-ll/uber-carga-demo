import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarguePagoRecibidoComponent } from './cargue-pago-recibido.component';

describe('CarguePagoRecibidoComponent', () => {
  let component: CarguePagoRecibidoComponent;
  let fixture: ComponentFixture<CarguePagoRecibidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarguePagoRecibidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarguePagoRecibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
