import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFinalizadoComponent } from './servicio-finalizado.component';

describe('ServicioFinalizadoComponent', () => {
  let component: ServicioFinalizadoComponent;
  let fixture: ComponentFixture<ServicioFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioFinalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
