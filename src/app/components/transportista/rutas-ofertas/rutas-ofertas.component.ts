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

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
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
    this.sessionStorageService.store('ss_empresa_sel', item);

    this.router.navigate(['/transporte/oferta-enviada']);
  }
}
