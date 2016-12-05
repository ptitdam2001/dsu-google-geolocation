import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { GeolocationModule } from '../geolocation/geolocation.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    GeolocationModule.forRoot({key: 'AIzaSyDjDEkj5MloWhk9SBkZA37olm6qtwIekY4', format: 'json'})
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
