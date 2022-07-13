import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRegistradaComponent } from './solicitud-registrada.component';

describe('SolicitudRegistradaComponent', () => {
  let component: SolicitudRegistradaComponent;
  let fixture: ComponentFixture<SolicitudRegistradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRegistradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRegistradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
