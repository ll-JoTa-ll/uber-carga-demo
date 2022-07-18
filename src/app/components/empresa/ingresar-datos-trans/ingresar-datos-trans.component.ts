import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ingresar-datos-trans',
  templateUrl: './ingresar-datos-trans.component.html',
  styleUrls: ['./ingresar-datos-trans.component.sass'],
})
export class IngresarDatosTransComponent implements OnInit {
  model: any = {};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}
}
