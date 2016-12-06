import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchbarComponent } from './src/component/searchbar/searchbar.component';
import { GeocodeConfig } from './src/geocode-config';
import { GoogleGeolocationService } from './src/service/google-geolocation.service';
import { LocaleGeolocationService } from './src/service/locale-geolocation.service';

export * from './src/geocode-config';
export * from './src/service/google-geolocation.service';
export * from './src/service/locale-geolocation.service';
export * from './src/component/searchbar/searchbar.component';

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
