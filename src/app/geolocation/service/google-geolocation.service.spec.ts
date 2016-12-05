/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleGeolocationService } from './google-geolocation.service';
import { Http, HttpModule, Response } from '@angular/http';
import { GeocodeConfig } from '../geocode-config';

describe('GoogleGeolocationService', () => {
  let service: GoogleGeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: GeocodeConfig, useValue: {key: 'AIzaSyDjDEkj5MloWhk9SBkZA37olm6qtwIekY4', format: 'json'}
        },
        GoogleGeolocationService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(GoogleGeolocationService);
  });

  it('should return an Observable<Array<LocationData>> when searchFromString() is called',  async(() => {
    service.searchFromString('montpellier').subscribe(response => {
      expect(response.length).toBeGreaterThan(0);
      expect(response[0].formatted_address).toContain('Montpellier');
    });
  }));
});
