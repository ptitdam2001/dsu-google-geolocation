import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationData } from '../../classes';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { GoogleGeolocationService } from '../../service/google-geolocation.service';

@Component({
  selector: 'app-searchbar',
  // templateUrl: './searchbar.component.html',
  template: `
  <div>
    <input placeholder="Search a town" [formControl]="term" type="text" />
    <ul ng-if="items.length > 0">
      <li *ngFor="let item of items" (click)="select(item)">{{item.formatted_address}}</li>
    </ul>
  </div>
  `,
  // styleUrls: ['./searchbar.component.scss']
  styles: [`
:host {
  padding: 10px;
}

:host input {
  width: 100%;
  padding: 0 5px;
  border-radius: 5px;
  height: 35px;
  font-size: 20px;
  box-shadow: 5px 1px black;
  line-height: 35px;
}

:host ul {
  list-style: none;
  padding: 0;
  display: block;
  border: solid 1px #aaa;
  border-radius: 0 0 3px 3px;
  margin-top: 0;
}

:host ul li {
  border-bottom: solid 1px #999;
  padding: 3px;
  background: #fff;
  height: 30px;
  line-height: 30px;
}

:host ul li:last-child {
  border-bottom: none;
}

:host ul li:hover {
  background: #416399;
  cursor: pointer;
  color: #fff;
}`
  ]
})
export class SearchbarComponent implements OnInit {

  public items: Array<any>;
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

  public select(item: any) {
    // transmit selected area to parent component with (onSelect)
    let data = new LocationData();
    data.long_name = item.formatted_address;
    data.lat = item.geometry.location.lat;
    data.lon = item.geometry.location.lng;

    // send to output onSelect the response of request
    this.onSelect.emit(data);
  }

}
