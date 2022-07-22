import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  AnySourceData,
  LngLatBounds,
  LngLatLike,
  Map,
  Marker,
  Popup,
} from 'mapbox-gl';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { MapboxglService } from '../../../services/mapboxgl.service';

@Component({
  selector: 'app-solicitud-carga',
  templateUrl: './solicitud-carga.component.html',
  styleUrls: ['./solicitud-carga.component.sass'],
})
export class SolicitudCargaComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  empresa_ruta_data: any = {};
  lugarDestino: any = {};
  markerDestino: any[] = [];
  distanciaEstimada;
  tiempoEstimado;
  coords;
  start;
  bounds = new LngLatBounds();
  map: Map;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService,
    private mapboxglService: MapboxglService
  ) {
    this.lugarDestino = this.sessionStorageService.retrieve('ss_lugarDestino');

    this.markerDestino = this.lugarDestino.longlat;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement.nativeElement, //'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-75.04684589565241, -12.028961858269186], // starting position [lng, lat]
      zoom: 4, // starting zoom
      //projection: 'globe', // display the map as a 3D globe
    });

    this.mapboxglService.getDriving(this.lugarDestino.urlget).subscribe(
      (result: any) => {
        console.log(result);
        this.drawPolyLine(result.routes[0]);
      },
      (err: any) => {},
      () => {
        console.log('COMPLETE GET MAPBOX RUTAS');
        console.log('COMPLETE GET MAPBOX RUTAS');
        console.log('COMPLETE GET MAPBOX RUTAS');

        //LIMA -77.01759557142694,-11.98850579670065
        //TRUX -78.96881086466664, -8.091603197876042
        //ICA -75.73014332206233,-14.057739178319324
        //HUACHO -77.6059805482074,-11.068336228835392
        //AQP -71.52621047695156,-16.401660068145944

        var markerOrigen = new Marker({
          draggable: false,
        })
          .setLngLat([-77.01759557142694, -11.98850579670065])
          .addTo(map);

        let destinoLng: number = this.markerDestino[0];
        let destinoLat: number = this.markerDestino[1];

        var markerDestino = new Marker({
          draggable: false,
        })
          .setLngLat([destinoLng, destinoLat])
          .addTo(map);

        this.map = map;

        map?.fitBounds(this.bounds, { padding: 200 });

        let sourceData: AnySourceData = {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: this.coords,
                },
              },
            ],
          },
        };

        console.log('sourceData');
        console.log(sourceData);

        map.on('load', function () {
          //limpiar ruta previa
          map.addSource('RouteString', sourceData);

          map.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
              'line-cap': 'round',
              'line-join': 'round',
            },
            paint: {
              'line-color': 'green',
              'line-width': 3,
            },
          });
        });
      }
    );
  }

  drawPolyLine(route) {
    console.log({
      kms: route.distance / 1000,
      duration: route.duration / 60, //minutos
    });

    this.distanciaEstimada = route.distance / 1000;

    let duracionMinutos = route.duration / 60;
    let duracionHoras = duracionMinutos / 60;
    this.tiempoEstimado = duracionHoras;

    const coords = route.geometry.coordinates;
    console.log('coords');
    console.log(coords);
    this.coords = coords;

    //this.start = this.coords[0] as [number, number];
    const bounds = new LngLatBounds();
    coords.forEach((coord: any) => {
      //bounds.push([lgn, lat]);
      bounds.extend(coord);
    });

    this.bounds = bounds;

    console.log('this.bounds');
    console.log(this.bounds);
  }

  finalizarServicio() {
    this.router.navigate(['/empresa/servicio-fin']);
  }
}
