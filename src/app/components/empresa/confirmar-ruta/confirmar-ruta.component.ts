import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-confirmar-ruta',
  templateUrl: './confirmar-ruta.component.html',
  styleUrls: ['./confirmar-ruta.component.sass'],
})
export class ConfirmarRutaComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor() {}

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
