import { ModuleWithProviders } from '@angular/core';
import { GeocodeConfig } from './src/geocode-config';
export * from './src/geocode-config';
export * from './src/service/google-geolocation.service';
export * from './src/service/locale-geolocation.service';
export * from './src/component/searchbar/searchbar.component';
export declare class GeolocationModule {
    static forRoot(config: GeocodeConfig): ModuleWithProviders;
}
