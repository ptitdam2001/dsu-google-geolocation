import { DsuGoogleGeolocationPage } from './app.po';

describe('dsu-google-geolocation App', function() {
  let page: DsuGoogleGeolocationPage;

  beforeEach(() => {
    page = new DsuGoogleGeolocationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
