export class Page {
  constructor(params) {
    this.params = params || Date.now().toString();
  }
  getRoot() {
    throw new Error('Method "getRoot" you just have to implement');
  }
  afterRender() {}
  destroy() {}
}
