import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-establece-turno',
  templateUrl: './establece-turno.component.html',
  styleUrls: ['./establece-turno.component.sass'],
})
export class EstableceTurnoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/empresa/establece-turno']);
  }

  next() {
    this.router.navigate(['/empresa/solicitud-carga']);
  }
}
