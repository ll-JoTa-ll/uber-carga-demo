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
  lugares: any[] = [
    {
      destino: 'Trujillo',
      km: 557,
      precio: 149.2,
      tipoVehiculo: 30,
      valorViaje: 4.477,
      longlat: [-78.96881086466664, -8.091603197876042],
      urlget:
        'https://api.mapbox.com/directions/v5/mapbox/driving/-77.01759557142694%2C-11.98850579670065%3B-78.96881086466664%2C-8.091603197876042',
    },
    {
      destino: 'Ica',
      km: 305,
      precio: 144.9,
      tipoVehiculo: 25,
      valorViaje: 3.623,
      longlat: [-75.73014332206233, -14.057739178319324],
      urlget:
        'https://api.mapbox.com/directions/v5/mapbox/driving/-77.01759557142694%2C-11.98850579670065%3B-75.73014332206233%2C-14.057739178319324',
    },
    {
      destino: 'Huacho',
      km: 140,
      precio: 142.6,
      tipoVehiculo: 30,
      valorViaje: 4.278,
      longlat: [-77.6059805482074, -11.068336228835392],
      urlget:
        'https://api.mapbox.com/directions/v5/mapbox/driving/-77.01759557142694%2C-11.98850579670065%3B-77.6059805482074%2C-11.068336228835392',
    },
    {
      destino: 'Arequipa',
      km: 1012,
      precio: 161.2,
      tipoVehiculo: 25,
      valorViaje: 4.03,
      longlat: [-71.52621047695156, -16.401660068145944],
      urlget:
        'https://api.mapbox.com/directions/v5/mapbox/driving/-77.01759557142694%2C-11.98850579670065%3B-71.52621047695156%2C-16.401660068145944',
    },
  ];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.empresa = this.sessionStorageService.retrieve('ss_empresa');
  }

  ngOnInit(): void {
    this.model.tipoCarga = '0';
    this.model.condicionesEspeciales = '0';
    this.model.origen = 'Lima';
    this.model.destino = '0';
    this.model.estado = 'Buscando Transportista';
    this.model.empresaCorreo = this.empresa[0].correo;
    this.model.empresaId = this.empresa[0].id;
    this.model.estado_int = 1;
  }

  changeDestino(event) {
    if (this.model.destino == '0') {
      return false;
    }
    let lugarDestino = this.lugares.filter(
      (x) => x.destino == this.model.destino
    )[0];

    console.log(lugarDestino);

    this.sessionStorageService.store('ss_lugarDestino', lugarDestino);

    return true;
  }

  next() {
    var fechaReg = this.model.fechaEstimadaSalida;

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

    this.router.navigate(['/empresa/confirmar-ruta']);
  }

  back() {
    this.router.navigate(['/empresa/mis-viajes']);
  }
}
