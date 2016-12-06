"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var google_geocode_parameters_1 = require('../models/google-geocode-parameters');
var geocode_config_1 = require('../geocode-config');
var GoogleGeolocationService = (function () {
    function GoogleGeolocationService(http, config) {
        this.wsUrl = 'https://maps.googleapis.com/maps/api/geocode/';
        this.key = '';
        this.format = 'json';
        this.ws = http;
        if (config && config.key) {
            this.key = config.key;
        }
        if (config && config.format) {
            this.format = config.format;
        }
    }
    GoogleGeolocationService.prototype.buildUri = function () {
        return this.wsUrl + this.format;
    };
    /**
     * init configuration
     * @input config
     */
    GoogleGeolocationService.prototype.setConfig = function (config) {
        if (config.key) {
            this.key = config.key;
        }
        if (config.format) {
            this.format = config.format;
        }
    };
    /**
     * Give location from a string
     * @input address string
     * @return Observable<Array<any>>
     */
    GoogleGeolocationService.prototype.searchFromString = function (address) {
        var parameters = new google_geocode_parameters_1.GoogleGeocodeParameters(address, this.key);
        return this.ws.get(this.buildUri(), { search: parameters.toUrlSearchParams() })
            .map(function (response) { return response.json().results; });
    };
    GoogleGeolocationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, geocode_config_1.GeocodeConfig])
    ], GoogleGeolocationService);
    return GoogleGeolocationService;
}());
exports.GoogleGeolocationService = GoogleGeolocationService;
//# sourceMappingURL=google-geolocation.service.js.map