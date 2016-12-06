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
        var data = new classes_1.LocationData();
        data.long_name = item.formatted_address;
        data.lat = item.geometry.location.lat;
        data.lon = item.geometry.location.lng;
        this.onSelect.emit(data);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchbarComponent.prototype, "onSelect", void 0);
    SearchbarComponent = __decorate([
        core_1.Component({
            selector: 'geo-searchbar',
            template: "\n  <div>\n    <input placeholder=\"Search a town\" [formControl]=\"term\" type=\"text\" />\n    <ul ng-if=\"items.length > 0\">\n      <li *ngFor=\"let item of items\" (click)=\"select(item)\">{{item.formatted_address}}</li>\n    </ul>\n  </div>\n  ",
            styles: ["\n:host {\n  padding: 10px;\n}\n\n:host input {\n  width: 100%;\n  padding: 0 5px;\n  border-radius: 5px;\n  height: 35px;\n  font-size: 20px;\n  box-shadow: 5px 1px black;\n  line-height: 35px;\n}\n\n:host ul {\n  list-style: none;\n  padding: 0;\n  display: block;\n  border: solid 1px #aaa;\n  border-radius: 0 0 3px 3px;\n  margin-top: 0;\n}\n\n:host ul li {\n  border-bottom: solid 1px #999;\n  padding: 3px;\n  background: #fff;\n  height: 30px;\n  line-height: 30px;\n}\n\n:host ul li:last-child {\n  border-bottom: none;\n}\n\n:host ul li:hover {\n  background: #416399;\n  cursor: pointer;\n  color: #fff;\n}"
            ]
        }), 
        __metadata('design:paramtypes', [google_geolocation_service_1.GoogleGeolocationService])
    ], SearchbarComponent);
    return SearchbarComponent;
}());
exports.SearchbarComponent = SearchbarComponent;
//# sourceMappingURL=searchbar.component.js.map