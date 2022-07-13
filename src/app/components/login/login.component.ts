import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  usuarios: Usuario[];
  tipoLogin: 0;

  constructor(private usuarioService: UsuarioService, private router: Router) {
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

  selTipo(valor) {
    this.tipoLogin = valor;
  }

  login() {
    //this.router.navigate(['/empresa/ingresar-ruta']);
  }
}
