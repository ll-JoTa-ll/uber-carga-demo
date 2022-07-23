import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueFinalizadoComponent } from './cargue-finalizado.component';

describe('CargueFinalizadoComponent', () => {
  let component: CargueFinalizadoComponent;
  let fixture: ComponentFixture<CargueFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueFinalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
