import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarRutaComponent } from './confirmar-ruta.component';

describe('ConfirmarRutaComponent', () => {
  let component: ConfirmarRutaComponent;
  let fixture: ComponentFixture<ConfirmarRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
