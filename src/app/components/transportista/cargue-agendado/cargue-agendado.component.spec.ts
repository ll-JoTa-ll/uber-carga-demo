import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueAgendadoComponent } from './cargue-agendado.component';

describe('CargueAgendadoComponent', () => {
  let component: CargueAgendadoComponent;
  let fixture: ComponentFixture<CargueAgendadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueAgendadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueAgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
