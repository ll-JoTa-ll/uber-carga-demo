import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class AceptarOfertaComponent implements OnInit, AfterViewInit {
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
    this.transportista_empresa =
      this.sessionStorageService.retrieve('ss_transporte');
    this.empresa_sel = this.sessionStorageService.retrieve('ss_empresa_sel');
    console.log(this.transportista_empresa);
    console.log(this.empresa_sel);

    this.spinner.show();
    this.usuarioService.getUsuarioById(this.empresa_sel.empresaId).subscribe(
      (result: Usuario) => {
        console.log('this.usuario_empresa');
        this.usuario_empresa = result;
        console.log(this.usuario_empresa);

        console.log('UPDATE');
        console.log('UPDATE');

        this.empresa_sel.estado_int = 2;
        this.empresa_sel.estado = 'En Proceso';

        console.log(this.empresa_sel);

        this.usuarioService.updateEmpresaRuta(
          this.empresa_sel,
          this.empresa_sel.id
        );

        var data = {
          empresaId: this.empresa_sel.empresaId,
          transportistaId: this.transportista_empresa[0].id,
          rutaId: this.empresa_sel.id,
        };

        console.log('createEmpresaRutaTransportistaProceso');
        console.log('createEmpresaRutaTransportistaProceso');
        console.log('createEmpresaRutaTransportistaProceso');
        console.log(data);

        this.usuarioService.createEmpresaRutaProceso(data);

        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  home() {
    this.router.navigate(['/transporte']);
  }
}
