import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirTransportistaComponent } from './elegir-transportista.component';

describe('ElegirTransportistaComponent', () => {
  let component: ElegirTransportistaComponent;
  let fixture: ComponentFixture<ElegirTransportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirTransportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
