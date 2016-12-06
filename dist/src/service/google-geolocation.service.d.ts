import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GeolocationService } from './geolocation-service';
import { GeocodeConfig } from '../geocode-config';
export declare class GoogleGeolocationService implements GeolocationService {
    private wsUrl;
    private key;
    private format;
    private ws;
    constructor(http: Http, config: GeocodeConfig);
    private buildUri();
    /**
     * init configuration
     * @input config
     */
    setConfig(config: GeocodeConfig): void;
    /**
     * Give location from a string
     * @input address string
     * @return Observable<Array<any>>
     */
    searchFromString(address: string): Observable<Array<any>>;
}
