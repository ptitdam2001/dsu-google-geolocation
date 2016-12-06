import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationData } from '../../classes';
import 'rxjs';
import { GoogleGeolocationService } from '../../service/google-geolocation.service';
export declare class SearchbarComponent implements OnInit {
    private service;
    items: Array<any>;
    term: FormControl;
    onSelect: EventEmitter<LocationData>;
    constructor(service: GoogleGeolocationService);
    ngOnInit(): void;
    select(item: any): void;
}
