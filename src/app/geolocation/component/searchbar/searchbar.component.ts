import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationData } from '../../classes';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { GoogleGeolocationService } from '../../service/google-geolocation.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  public items;
  public term = new FormControl();

  @Output() onSelect = new EventEmitter <LocationData>();

  constructor(private service: GoogleGeolocationService) {}

  ngOnInit() {
    this.term.valueChanges
      .filter(query => query.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.service.searchFromString(term).catch(error => Observable.of([])))
      .subscribe(results => this.items = results);
  }

  public select(item) {
    // transmit selected area to parent component with (onSelect)
    let data = new LocationData();
    data.long_name = item.formatted_address;
    data.lat = item.geometry.location.lat;
    data.lon = item.geometry.location.lng;

    // send to output onSelect the response of request
    this.onSelect.emit(data);
  }

}
