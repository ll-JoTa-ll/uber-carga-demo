import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmpresaRuta } from '../../../models/empresaRuta';
import { Usuario } from '../../../models/usuario';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-rutas-ofertas',
  templateUrl: './rutas-ofertas.component.html',
  styleUrls: ['./rutas-ofertas.component.sass'],
})
export class RutasOfertasComponent implements OnInit {
  solicitudes: EmpresaRuta[];
  usuario_empresa: Usuario = new Usuario();
  transportista_empresa: Usuario = new Usuario();

  data: any = {};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.transportista_empresa =
      this.sessionStorageService.retrieve('ss_transporte');
    this.spinner.show();
    this.usuarioService.getEmpresaRutas().subscribe(
      (result) => {
        this.solicitudes = result.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as EmpresaRuta),
          };
        });
        console.log('solicitudes:');
        console.log(this.solicitudes);
        this.solicitudes = this.solicitudes.filter((x) => x.estado_int == 1);
        this.spinner.hide();
      },

      (err: any) => {
        this.spinner.hide();
      },

      () => {
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {}

  aceptar(item) {
    this.spinner.show();
    this.sessionStorageService.store('ss_empresa_sel', item);

    console.log('UPDATE');
    console.log('UPDATE');

    item.estado_int = 2;
    item.estado = 'En Proceso';

    console.log(item);

    this.usuarioService.updateEmpresaRuta(item, item.id);

    this.data.empresaId = item.empresaId;
    this.data.transportistaId = this.transportista_empresa[0].id;
    this.data.rutaId = item.id;

    console.log('createEmpresaRutaTransportistaProceso');
    console.log('createEmpresaRutaTransportistaProceso');
    console.log('createEmpresaRutaTransportistaProceso');
    console.log(this.data);

    this.usuarioService.createEmpresaRutaProceso(this.data);

    let flag = 0;
    this.usuarioService.getUsuarioById(item.empresaId).subscribe(
      (result: Usuario) => {
        console.log('this.usuario_empresa');
        this.usuario_empresa = result;
        console.log(this.usuario_empresa);
        this.sessionStorageService.store(
          'ss_usuario_empresa_oferta',
          this.usuario_empresa
        );
        this.spinner.hide();
        this.router.navigate(['/transporte/oferta-enviada']);
      },
      (err) => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }
}
