import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargue-finalizado',
  templateUrl: './cargue-finalizado.component.html',
  styleUrls: ['./cargue-finalizado.component.sass'],
})
export class CargueFinalizadoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  atras() {
    this.router.navigate(['/transporte/cargue-nro-carga']);
  }

  next() {
    this.router.navigate(['/transporte/cargue-pago-recibido']);
  }
}
