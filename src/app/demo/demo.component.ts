import { Component, OnInit } from '@angular/core';
import { LocaleGeolocationService } from '../geolocation/service/locale-geolocation.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public title: string;

  public currentCoordinates;

  constructor(private geolocationLocal: LocaleGeolocationService) { }


  ngOnInit() {
    this.title = 'demo works!';
  }

  public onSelectLocation(selected) {
    this.currentCoordinates = selected;
  }

}
