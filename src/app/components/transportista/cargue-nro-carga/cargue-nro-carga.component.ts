import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargue-nro-carga',
  templateUrl: './cargue-nro-carga.component.html',
  styleUrls: ['./cargue-nro-carga.component.sass'],
})
export class CargueNroCargaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  atras() {
    this.router.navigate(['/transporte/cargue-agendado']);
  }

  next() {
    this.router.navigate(['/transporte/cargue-finalizado']);
  }
}
