import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueNroCargaComponent } from './cargue-nro-carga.component';

describe('CargueNroCargaComponent', () => {
  let component: CargueNroCargaComponent;
  let fixture: ComponentFixture<CargueNroCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueNroCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueNroCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
