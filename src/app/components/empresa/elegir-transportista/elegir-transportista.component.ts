import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmpresaRuta } from '../../../models/empresaRuta';
import { Usuario } from '../../../models/usuario';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-elegir-transportista',
  templateUrl: './elegir-transportista.component.html',
  styleUrls: ['./elegir-transportista.component.sass'],
})
export class ElegirTransportistaComponent implements OnInit {
  ruta_empresa_proceso: EmpresaRuta = new EmpresaRuta();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.ruta_empresa_proceso = this.sessionStorageService.retrieve(
      'ss_ruta_empresa_proceso'
    );
    console.log('this.ruta_empresa_proceso:');
    console.log(this.ruta_empresa_proceso);
  }

  ngOnInit(): void {}
}
