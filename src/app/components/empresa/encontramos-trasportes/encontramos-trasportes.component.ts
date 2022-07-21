import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encontramos-trasportes',
  templateUrl: './encontramos-trasportes.component.html',
  styleUrls: ['./encontramos-trasportes.component.sass'],
})
export class EncontramosTrasportesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/empresa/ruta-registrada']);
  }

  next() {
    this.router.navigate(['/empresa/elegiste-transporte']);
  }
}
