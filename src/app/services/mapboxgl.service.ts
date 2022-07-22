import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class MapboxglService {
  private url: string =
    'https://api.mapbox.com/directions/v5/mapbox/driving/-77.01759557142694%2C-11.98850579670065%3B-71.52621047695156%2C-16.401660068145944';

  constructor(
    private http: HttpClient,
    private sessionSt: SessionStorageService
  ) {}

  getDriving(url) {
    return this.http.get(url, {
      params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:
          'pk.eyJ1IjoibGwtam90YS1sbCIsImEiOiJjbDVxYzd2eG8xY2N3M2JtbmZmeTRnaWhjIn0.oxbKczbkOfVCQMFks8vYDg',
      },
    });
  }
}
