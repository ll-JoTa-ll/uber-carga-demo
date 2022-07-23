import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaRegComponent } from './empresa-reg.component';

describe('EmpresaRegComponent', () => {
  let component: EmpresaRegComponent;
  let fixture: ComponentFixture<EmpresaRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
