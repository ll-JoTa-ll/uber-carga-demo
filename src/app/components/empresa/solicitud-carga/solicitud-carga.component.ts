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
  selector: 'app-solicitud-carga',
  templateUrl: './solicitud-carga.component.html',
  styleUrls: ['./solicitud-carga.component.sass'],
})
export class SolicitudCargaComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, //'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      //projection: 'globe', // display the map as a 3D globe
    });
  }
}
