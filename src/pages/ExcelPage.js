import { Page } from '@core/page/Page';

// Components
import { Excel } from '../components/excel/Excel';
import { Header } from '../components/header/Header';
import { Toolbar } from '../components/toolbar/Toolbar';
import { Formula } from '../components/formula/Formula';
import { Table } from '../components/Table/Table';
// Redux-related
import { createStore } from '../core/store/createStore';
import { rootReducer } from '../redux/rootReducer';
import { normalizeInitialState } from '../redux/initialState';
import { StateProcessor } from '../core/page/StateProcessor';
import { LocalStorageClient } from '../shared/LocalStorageClient';

function storageName(params) {
  return 'table:' + params;
}

export class ExcelPage extends Page {
  constructor(params) {
    super(params);

    this.storeSub = null;
    this.processor = new StateProcessor(
      new LocalStorageClient(this.params),
      300
    );
  }
  async getRoot() {
    const state = await this.processor.get();
    const store = createStore(rootReducer, normalizeInitialState(state));

    this.storeSub = store.subscribe(this.processor.listen);

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return this.excel.getRoot();
  }

  afterRender() {
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
    this.storeSub.unsubscribe();
  }
}
