import { Http } from '@angular/http';
import { Injectable, Optional, Inject } from '@angular/core';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { GeolocationService } from './geolocation-service';
import { GoogleGeocodeParameters } from '../models/google-geocode-parameters';
import { GeocodeConfig } from '../geocode-config';


@Injectable()
export class GoogleGeolocationService implements GeolocationService {

  private wsUrl = 'https://maps.googleapis.com/maps/api/geocode/';
  private key: string = '';
  private format: string = 'json';
  private ws: Http;

  constructor(@Inject(Http) http: Http, @Optional() config: GeocodeConfig) {
    this.ws = http;
    if (config && config.key) {
      this.key = config.key;
    }

    if (config && config.format) {
      this.format = config.format;
    }
  }

  private buildUri(): string {
    return this.wsUrl + this.format;
  }

  /**
   * init configuration
   * @input config
   */
  public setConfig(config: GeocodeConfig) {
    if (config.key) {
      this.key = config.key;
    }
    if (config.format) {
      this.format = config.format;
    }
  }

  /**
   * Give location from a string
   * @input address string
   * @return Observable<Array<any>>
   */
  public searchFromString(address: string): Observable<Array<any>> {
    let parameters = new GoogleGeocodeParameters(address, this.key);

    return this.ws.get(this.buildUri(), {search: parameters.toUrlSearchParams()})
      .map((response) => response.json().results);
  }

  // public searchFromCoordinates(coord: Coordinates) {}

}
