import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontramosTrasportesComponent } from './encontramos-trasportes.component';

describe('EncontramosTrasportesComponent', () => {
  let component: EncontramosTrasportesComponent;
  let fixture: ComponentFixture<EncontramosTrasportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncontramosTrasportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontramosTrasportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
