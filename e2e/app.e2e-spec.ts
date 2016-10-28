import { MaterialHeroesPage } from './app.po';

describe('material-heroes App', function() {
  let page: MaterialHeroesPage;

  beforeEach(() => {
    page = new MaterialHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
