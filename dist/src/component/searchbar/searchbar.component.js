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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var classes_1 = require('../../classes');
require('rxjs');
var Observable_1 = require('rxjs/Observable');
var google_geolocation_service_1 = require('../../service/google-geolocation.service');
var SearchbarComponent = (function () {
    function SearchbarComponent(service) {
        this.service = service;
        this.term = new forms_1.FormControl();
        this.onSelect = new core_1.EventEmitter();
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.term.valueChanges
            .filter(function (query) { return query.length >= 3; })
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.service.searchFromString(term).catch(function (error) { return Observable_1.Observable.of([]); }); })
            .subscribe(function (results) { return _this.items = results; });
    };
    SearchbarComponent.prototype.select = function (item) {
        // transmit selected area to parent component with (onSelect)
        var data = new classes_1.LocationData();
        data.long_name = item.formatted_address;
        data.lat = item.geometry.location.lat;
        data.lon = item.geometry.location.lng;
        // send to output onSelect the response of request
        this.onSelect.emit(data);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchbarComponent.prototype, "onSelect", void 0);
    SearchbarComponent = __decorate([
        core_1.Component({
            selector: 'app-searchbar',
            templateUrl: './searchbar.component.html',
            styleUrls: ['./searchbar.component.scss']
        }), 
        __metadata('design:paramtypes', [google_geolocation_service_1.GoogleGeolocationService])
    ], SearchbarComponent);
    return SearchbarComponent;
}());
exports.SearchbarComponent = SearchbarComponent;
//# sourceMappingURL=searchbar.component.js.map