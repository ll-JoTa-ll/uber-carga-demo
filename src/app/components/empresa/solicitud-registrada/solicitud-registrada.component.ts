import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-registrada',
  templateUrl: './solicitud-registrada.component.html',
  styleUrls: ['./solicitud-registrada.component.sass'],
})
export class SolicitudRegistradaComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    var routerrrrr = this.router;
    setTimeout(function () {
      routerrrrr.navigate(['/empresa/transportistas-lista']);
    }, 3000);
  }

  irHome() {
    this.router.navigate(['/empresa']);
  }
}
