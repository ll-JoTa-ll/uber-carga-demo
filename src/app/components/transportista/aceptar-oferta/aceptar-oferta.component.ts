import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmpresaRuta } from '../../../models/empresaRuta';
import { Usuario } from '../../../models/usuario';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-aceptar-oferta',
  templateUrl: './aceptar-oferta.component.html',
  styleUrls: ['./aceptar-oferta.component.sass'],
})
export class AceptarOfertaComponent implements OnInit {
  empresa_sel: EmpresaRuta;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.empresa_sel = this.sessionStorageService.retrieve('ss_empresa_sel');
  }

  ngOnInit(): void {}
}
