import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass'],
})
export class RegistroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goRegistroPN() {
    this.router.navigate(['/registro/persona-natural']);
  }

  goRegistroEmp() {
    this.router.navigate(['/registro/empresa-reg']);
  }
}
