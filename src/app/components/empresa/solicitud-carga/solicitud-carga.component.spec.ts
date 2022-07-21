import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCargaComponent } from './solicitud-carga.component';

describe('SolicitudCargaComponent', () => {
  let component: SolicitudCargaComponent;
  let fixture: ComponentFixture<SolicitudCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
