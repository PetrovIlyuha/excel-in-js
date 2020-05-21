import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options?.listeners);
    this.name = options?.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
  }
  // Setting component before initialization
  prepare() {}
  // returning component template in HTML
  toHTML() {
    return '';
  }

  // notifying listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscription for the event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // initializing component and adding listeners
  init() {
    this.initDomListeners();
  }

  // Removing component and it's listeners
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
