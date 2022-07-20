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
  empresa_sel: EmpresaRuta = new EmpresaRuta();
  usuario_empresa: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.empresa_sel = this.sessionStorageService.retrieve('ss_empresa_sel');
    console.log(this.empresa_sel);

    this.spinner.show();
    this.usuarioService.getUsuarioById(this.empresa_sel.empresaId).subscribe(
      (result: Usuario) => {
        console.log('result');
        console.log('result');
        console.log('result');
        console.log('result');
        console.log('result');

        //console.log(result);
        this.usuario_empresa = result;

        console.log('UPDATE');
        console.log('UPDATE');
        console.log('UPDATE');
        console.log('UPDATE');
        console.log('UPDATE');

        this.empresa_sel.estado_int = 2;
        this.empresa_sel.estado = 'En Proceso';

        console.log(this.empresa_sel);

        this.usuarioService.updateEmpresaRuta(
          this.empresa_sel,
          this.empresa_sel.id
        );
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

  home() {
    this.router.navigate(['/transporte']);
  }
}
