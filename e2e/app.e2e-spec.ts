import { Angular2PwaPage } from './app.po';

describe('angular2-pwa App', function() {
  let page: Angular2PwaPage;

  beforeEach(() => {
    page = new Angular2PwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
