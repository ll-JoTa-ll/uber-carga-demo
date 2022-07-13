import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarDatosTransComponent } from './ingresar-datos-trans.component';

describe('IngresarDatosTransComponent', () => {
  let component: IngresarDatosTransComponent;
  let fixture: ComponentFixture<IngresarDatosTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarDatosTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarDatosTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
