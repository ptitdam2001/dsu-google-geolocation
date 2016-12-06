import { URLSearchParams } from '@angular/http';
/**
 * @todo
 * Implements bounds and region : see https://developers.google.com/maps/documentation/geocoding/intro?hl=fr
 */
export declare class GoogleGeocodeParameters {
    address: string;
    private api_key;
    private lang;
    private filter;
    constructor(address: string, api_key?: string, lang?: string, filter?: Array<string>);
    setKey(key: string): void;
    toJson(): {
        address: string;
        key: string;
        lang: string;
        components: string[];
    };
    /**
     * Returns a object with parameters
     *
     * @params string key
     * @return Object
     */
    toUrlSearchParams(): URLSearchParams;
    toQueryString(): string;
}
