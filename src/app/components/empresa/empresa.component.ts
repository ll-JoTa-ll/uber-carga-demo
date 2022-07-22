import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.sass'],
})
export class EmpresaComponent implements OnInit {
  nombreEmpresa: string = '';
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
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.sessionStorageService.store('ss_lugares', this.lugares);
  }

  ngOnInit(): void {}

  ir(tipo) {
    switch (tipo) {
      case 1:
        this.router.navigate(['/empresa/mi-cuenta']);
        break;
      case 2:
        this.router.navigate(['/empresa/pagos']);
        break;
      case 3:
        this.router.navigate(['/empresa/mis-viajes']);
        break;
      case 4:
        this.router.navigate(['/empresa/metricas']);
        break;
      case 5:
        this.router.navigate(['/empresa/ayuda']);
        break;
    }
  }
}
