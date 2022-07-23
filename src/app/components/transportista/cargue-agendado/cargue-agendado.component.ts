import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargue-agendado',
  templateUrl: './cargue-agendado.component.html',
  styleUrls: ['./cargue-agendado.component.sass'],
})
export class CargueAgendadoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  atras() {
    this.router.navigate(['/transporte/oferta-enviada']);
  }

  next() {
    this.router.navigate(['/transporte/cargue-nro-carga']);
  }
}
