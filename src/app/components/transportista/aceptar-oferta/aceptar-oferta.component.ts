import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmpresaRuta } from '../../../models/empresaRuta';
import { Usuario } from '../../../models/usuario';
import { EmpresaRutaTransportistaProceso } from '../../../models/empresaRutaTransportistaProceso';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-aceptar-oferta',
  templateUrl: './aceptar-oferta.component.html',
  styleUrls: ['./aceptar-oferta.component.sass'],
})
export class AceptarOfertaComponent implements OnInit {
  empresa_sel: EmpresaRuta = new EmpresaRuta();
  usuario_empresa: Usuario = new Usuario();
  transportista_empresa: Usuario = new Usuario();
  //empresaRutaTransportistaProceso: EmpresaRutaTransportistaProceso;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.usuario_empresa = this.sessionStorageService.retrieve(
      'ss_usuario_empresa_oferta'
    );
  }

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/transporte']);
  }
}
