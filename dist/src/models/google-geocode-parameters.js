"use strict";
var http_1 = require('@angular/http');
/**
 * @todo
 * Implements bounds and region : see https://developers.google.com/maps/documentation/geocoding/intro?hl=fr
 */
var GoogleGeocodeParameters = (function () {
    function GoogleGeocodeParameters(address, api_key, lang, filter) {
        this.address = address;
        this.api_key = api_key;
        this.lang = lang;
        this.filter = filter;
        if (!this.lang) {
            this.lang = 'en';
        }
    }
    GoogleGeocodeParameters.prototype.setKey = function (key) {
        this.api_key = key;
    };
    GoogleGeocodeParameters.prototype.toJson = function () {
        return {
            address: this.address,
            key: this.api_key,
            lang: this.lang,
            components: this.filter
        };
    };
    /**
     * Returns a object with parameters
     *
     * @params string key
     * @return Object
     */
    GoogleGeocodeParameters.prototype.toUrlSearchParams = function () {
        var params = new http_1.URLSearchParams();
        params.set('address', this.address);
        params.set('key', this.api_key);
        params.set('lang', this.lang);
        if (this.filter && this.filter.length > 0) {
            params.set('components', this.filter.join('|'));
        }
        return params;
    };
    GoogleGeocodeParameters.prototype.toQueryString = function () {
        var components = '';
        if (this.filter.length > 0) {
            components = '&components=' + this.filter.join('|');
        }
        return 'key=' + this.api_key + '&address=' + encodeURI(this.address) + '&lang=' + this.lang + components;
    };
    return GoogleGeocodeParameters;
}());
exports.GoogleGeocodeParameters = GoogleGeocodeParameters;
//# sourceMappingURL=google-geocode-parameters.js.map