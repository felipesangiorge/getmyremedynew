import { GetmyremedyappPage } from './app.po';

describe('getmyremedyapp App', () => {
  let page: GetmyremedyappPage;

  beforeEach(() => {
    page = new GetmyremedyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
