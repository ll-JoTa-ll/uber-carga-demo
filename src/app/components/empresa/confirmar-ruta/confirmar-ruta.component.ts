import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-confirmar-ruta',
  templateUrl: './confirmar-ruta.component.html',
  styleUrls: ['./confirmar-ruta.component.sass'],
})
export class ConfirmarRutaComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  empresa_ruta_data: any = {};
  lugarDestino: any = {};
  markerDestino: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    this.lugarDestino = this.sessionStorageService.retrieve('ss_lugarDestino');
    console.log('constructor ConfirmarRutaComponent');

    console.log(this.lugarDestino);

    this.markerDestino = this.lugarDestino.longlat;

    console.log(this.markerDestino);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, //'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-75.04684589565241, -12.028961858269186], // starting position [lng, lat]
      zoom: 5, // starting zoom
      //projection: 'globe', // display the map as a 3D globe
    });

    //LIMA -77.01759557142694,-11.98850579670065
    //TRUX -78.96881086466664, -8.091603197876042
    //ICA -75.73014332206233,-14.057739178319324
    //HUACHO -77.6059805482074,-11.068336228835392
    //AQP -71.52621047695156,-16.401660068145944

    var markerOrigen = new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([-77.01759557142694, -11.98850579670065])
      .addTo(map);

    let destinoLng: number = this.markerDestino[0];
    let destinoLat: number = this.markerDestino[1];

    var markerDestino = new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([destinoLng, destinoLat])
      .addTo(map);
  }

  confirmarRuta() {
    this.empresa_ruta_data = this.sessionStorageService.retrieve(
      'ss_empresa_ruta_data'
    );
    this.usuarioService.createEmpresaRuta(this.empresa_ruta_data);
    this.router.navigate(['/empresa/ruta-registrada']);
  }

  atras() {
    this.router.navigate(['/empresa/ingresar-ruta']);
  }
}
