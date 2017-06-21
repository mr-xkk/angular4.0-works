import { NgStationPage } from './app.po';

describe('ng-station App', () => {
  let page: NgStationPage;

  beforeEach(() => {
    page = new NgStationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
