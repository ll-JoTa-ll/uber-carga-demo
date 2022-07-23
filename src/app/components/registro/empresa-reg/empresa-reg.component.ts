import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-empresa-reg',
  templateUrl: './empresa-reg.component.html',
  styleUrls: ['./empresa-reg.component.sass'],
})
export class EmpresaRegComponent implements OnInit {
  model: any = {};
  usuarios: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.model.tipo = 2;
    this.model.tipoDesc = 'Empresa';
  }

  ngOnInit(): void {}

  crearUsuario() {
    this.spinner.show();
    this.usuarioService.createUsuario(this.model);

    this.usuarioService.getUsuarios().subscribe(
      (result) => {
        this.usuarios = result.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Usuario),
          };
        });
        //console.log('USUARIOS:');
        //console.log(this.usuarios);

        let usuarios = this.usuarios;
        let usuario = usuarios.filter(
          (x) =>
            x.tipo == 2 &&
            x.correo == this.model.correo &&
            x.clave == this.model.clave
        );
        this.spinner.hide();
        if (usuario.length == 1) {
          this.sessionStorageService.store('ss_empresa', usuario);
          this.router.navigate(['/empresa']);
        }
      },

      (err: any) => {
        this.spinner.hide();
      },

      () => {
        this.spinner.hide();
      }
    );
  }
}
