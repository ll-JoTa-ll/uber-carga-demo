import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-registrada',
  templateUrl: './solicitud-registrada.component.html',
  styleUrls: ['./solicitud-registrada.component.sass'],
})
export class SolicitudRegistradaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irHome() {
    this.router.navigate(['/empresa']);
  }
}
