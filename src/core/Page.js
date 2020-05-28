export class Page {
  constructor(params) {
    this.params = params;
  }
  getRoot() {
    throw new Error('Method "getRoot" you just have to implement');
  }
  afterRender() {}
  destroy() {}
}
