import {Observable} from 'rxjs';

export interface GeolocationService {
    searchFromString(Address: string): Observable<Array<any>>;
    // searchFromCoordinates(coordinates: Coordinates);
}
