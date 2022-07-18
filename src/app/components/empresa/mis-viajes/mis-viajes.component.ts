import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmpresaRuta } from '../../../models/empresaRuta';
import { Usuario } from '../../../models/usuario';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.sass'],
})
export class MisViajesComponent implements OnInit, AfterViewInit {
  empresa: any = {};
  solicitudes: EmpresaRuta[];
  empresaSolicitudes: EmpresaRuta[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.empresa = this.sessionStorageService.retrieve('ss_empresa');
    console.log(this.empresa[0]);

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

        this.empresaSolicitudes = this.solicitudes.filter(
          (x) => x.empresaId == this.empresa[0].id
        );
        console.log('empresa viajes:');
        console.log(this.empresaSolicitudes);
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

  ngAfterViewInit(): void {}

  irRegistro() {
    this.router.navigate(['/empresa/ingresar-ruta']);
  }
}
