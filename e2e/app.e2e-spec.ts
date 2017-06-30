import { MonadHomePage } from './app.po';

describe('monad-home App', () => {
  let page: MonadHomePage;

  beforeEach(() => {
    page = new MonadHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
