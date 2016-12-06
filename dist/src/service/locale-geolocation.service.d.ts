import { Observable } from 'rxjs';
export declare class LocaleGeolocationService {
    /**
     * Get location provided by the browser if it is possible
     * @param {Object} [opts] An object literal to specify one or more of the following attributes and desired values:
       *   - enableHighAccuracy: Specify true to obtain the most accurate position possible,
     * or false to optimize in favor of performance and power consumption.
       *   - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
       *              If timeout is Infinity, (the default value) the location request will not time out.
       *              If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
       *   - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
       *       If maximumAge is non-zero, and a cached position that is no older than maximumAge is available,
     * the cached position is used instead of obtaining an updated location.
       *       If maximumAge is zero (0), watchPosition always tries to obtain an updated position,
     * even if a cached position is already available.
       *       If maximumAge is Infinity, any cached position is used, regardless of its age,
     * and watchPosition only tries to obtain an updated position if no cached position data exists.
       * @returns {Observable} An observable sequence with the geographical location of the device running the client.
     */
    getLocation(opts: any): Observable<any>;
}
