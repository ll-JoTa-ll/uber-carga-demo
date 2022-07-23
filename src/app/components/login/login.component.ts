import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  usuarios: Usuario[];
  loginEmpresa: boolean;
  loginTransportista: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.loginEmpresa = true;
    this.loginTransportista = false;
    this.model.correo = '';
    this.model.clave = '';

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
      },

      (err: any) => {},

      () => {}
    );
  }

  ngOnInit(): void {}

  selTipo(valor1, valor2) {
    this.loginEmpresa = valor1;
    this.loginTransportista = valor2;
  }

  login() {
    this.spinner.show();
    let tipoLogin = 1;
    if (this.loginEmpresa == true) {
      tipoLogin = 2;
    }
    let usuarios = this.usuarios;

    let usuario = usuarios.filter(
      (x) =>
        x.tipo == tipoLogin &&
        x.correo == this.model.correo &&
        x.clave == this.model.clave
    );

    console.log('usuario: ' + JSON.stringify(usuario));

    if (usuario.length == 1) {
      this.spinner.hide();

      if (tipoLogin == 1) {
        this.sessionStorageService.store('ss_transporte', usuario);

        this.router.navigate(['/transporte']);
      }
      if (tipoLogin == 2) {
        this.sessionStorageService.store('ss_empresa', usuario);

        this.router.navigate(['/empresa']);
      }
    } else {
      this.spinner.hide();
    }

    //demo2@gmail.com

    //this.router.navigate(['/empresa/ingresar-ruta']);
  }

  goRegistro() {
    this.router.navigate(['/registro']);
  }
}
