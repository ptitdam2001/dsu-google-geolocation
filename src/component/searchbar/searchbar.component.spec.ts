/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchbarComponent } from './searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeocodeConfig } from '../../geocode-config';
import { GoogleGeolocationService } from '../../service/google-geolocation.service';

class GoogleConfig {
  key: 'AIzaSyDjDEkj5MloWhk9SBkZA37olm6qtwIekY4';
  format: 'json';
}

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      providers: [
        GoogleGeolocationService
      ],
      declarations: [
        SearchbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
