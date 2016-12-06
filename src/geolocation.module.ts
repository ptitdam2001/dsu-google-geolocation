import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GeocodeConfig } from './geocode-config';
import { GoogleGeolocationService } from './service/google-geolocation.service';
import { LocaleGeolocationService } from './service/locale-geolocation.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchbarComponent
  ],
  exports: [
    SearchbarComponent
  ],
  providers: [
    GoogleGeolocationService,
    LocaleGeolocationService
  ],
})
export class GeolocationModule {
  static forRoot(config: GeocodeConfig): ModuleWithProviders {
    return {
      ngModule: GeolocationModule,
      providers: [
        {provide: GeocodeConfig, useValue: config }
      ]
    };
  }
}
