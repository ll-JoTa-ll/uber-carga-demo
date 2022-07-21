import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstableceTurnoComponent } from './establece-turno.component';

describe('EstableceTurnoComponent', () => {
  let component: EstableceTurnoComponent;
  let fixture: ComponentFixture<EstableceTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstableceTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstableceTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
