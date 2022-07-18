import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.sass'],
})
export class EmpresaComponent implements OnInit {
  nombreEmpresa: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ir(tipo) {
    switch (tipo) {
      case 1:
        this.router.navigate(['/empresa/mi-cuenta']);
        break;
      case 2:
        this.router.navigate(['/empresa/pagos']);
        break;
      case 3:
        this.router.navigate(['/empresa/mis-viajes']);
        break;
      case 4:
        this.router.navigate(['/empresa/metricas']);
        break;
      case 5:
        this.router.navigate(['/empresa/ayuda']);
        break;
    }
  }
}
