import { $ } from '@core/dom';
import { Page } from '@core/page/Page';
import { createTableList } from './dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString().slice(-5);
    return $.create('div', 'db').html(`
        <div class="db">
          <div class="db__header">
            <h1>JS SpreadSheets Dashboard</h1>
          </div>
          <div class="db__new">
            <div class="db__view">
              <a href="#excel/${now}" class="db__create">
                <span><i class="material-icons">add_box</i></span>
                New <br />
                Table
              </a>
            </div>
          </div>
          <div class="db__table db__view">
            ${createTableList()}
          </div>
      </div>
      `);
  }
}
