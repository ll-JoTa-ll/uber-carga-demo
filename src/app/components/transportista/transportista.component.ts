import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.sass'],
})
export class TransportistaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarSol() {
    this.router.navigate(['/transporte/ofertas']);
  }
}
