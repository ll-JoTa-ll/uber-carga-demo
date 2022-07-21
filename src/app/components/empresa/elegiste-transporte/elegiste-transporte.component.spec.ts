import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegisteTransporteComponent } from './elegiste-transporte.component';

describe('ElegisteTransporteComponent', () => {
  let component: ElegisteTransporteComponent;
  let fixture: ComponentFixture<ElegisteTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegisteTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegisteTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
