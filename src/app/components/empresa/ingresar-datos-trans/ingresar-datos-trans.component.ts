import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-ingresar-datos-trans',
  templateUrl: './ingresar-datos-trans.component.html',
  styleUrls: ['./ingresar-datos-trans.component.sass'],
})
export class IngresarDatosTransComponent implements OnInit {
  model: any = {};
  empresa: any = {};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.empresa = this.sessionStorageService.retrieve('ss_empresa');
    console.log(this.empresa[0]);
  }

  ngOnInit(): void {
    this.model.tipoCarga = '0';
    this.model.condicionesEspeciales = '0';
    this.model.origen = '';
    this.model.destino = '';
    this.model.estado = 'Buscando Transportista';
    this.model.empresaCorreo = this.empresa[0].correo;
    this.model.empresaId = this.empresa[0].id;
  }

  next() {
    var fechaReg = this.model.fechaEstimadaSalida;
    console.log(fechaReg.getFullYear());
    console.log(fechaReg.getMonth() + 1);
    console.log(fechaReg.getDate());

    //return false;

    this.model.fechaEstimadaSalida =
      fechaReg.getDate() +
      '/' +
      (fechaReg.getMonth() + 1) +
      '/' +
      fechaReg.getFullYear();

    console.log(this.model.fechaEstimadaSalida);
    //return false;

    this.sessionStorageService.store('ss_empresa_ruta_data', this.model);
    console.log(this.model);

    this.router.navigate(['/empresa/confirmar-ruta']);
  }
}
