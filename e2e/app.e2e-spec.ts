import { NgxMdParseDemoPage } from './app.po';

describe('ngx-md-parse-demo App', () => {
  let page: NgxMdParseDemoPage;

  beforeEach(() => {
    page = new NgxMdParseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
