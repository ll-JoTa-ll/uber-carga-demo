import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-persona-natural',
  templateUrl: './persona-natural.component.html',
  styleUrls: ['./persona-natural.component.sass'],
})
export class PersonaNaturalComponent implements OnInit {
  model: any = {};
  usuarios: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.model.tipo = 1;
    this.model.tipoDesc = 'Transportista';
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
            x.tipo == 1 &&
            x.correo == this.model.correo &&
            x.clave == this.model.clave
        );
        this.spinner.hide();
        if (usuario.length == 1) {
          this.sessionStorageService.store('ss_transporte', usuario);
          this.router.navigate(['/transporte']);
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
