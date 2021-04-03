class App {
  constructor({
    open, close, drawer, hero, content,
  }) {
    this._open = open;
    this._close = close;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    import('../utils/drawer-initiator')
      .then((module) => module.default)
      .then((DrawerInitiator) => {
        DrawerInitiator.init({
          open: this._open,
          close: this._close,
          drawer: this._drawer,
          hero: this._hero,
          content: this._content,
        });
      });
  }

  async transactionPage(page) {
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  async renderPage() {
    const _UrlParser = await import('../routes/url-parser')
      .then((module) => module.default)
      .then((UrlParser) => UrlParser);

    const url = _UrlParser.parseActiveUrlWithCombiner();
    import('../routes/routes')
      .then((module) => module.default)
      .then((Routes) => {
        const page = Routes[url];
        this.transactionPage(page);
      })
      .catch((error) => new Error(error));
  }
}

export default App;
