import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elegiste-transporte',
  templateUrl: './elegiste-transporte.component.html',
  styleUrls: ['./elegiste-transporte.component.sass'],
})
export class ElegisteTransporteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/empresa/elegiste-transporte']);
  }

  next() {
    this.router.navigate(['/empresa/establece-turno']);
  }
}
