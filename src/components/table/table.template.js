const CODES = {
  A: 65,
  Z: 91,
};
const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;
function getColWidth(state, index) {
  return `${state[index] || DEFAULT_WIDTH}px`;
}
function getRowHeight(state, index) {
  return `${state[index] || DEFAULT_HEIGHT}px`;
}
function createCell(state, row) {
  // eslint-disable-next-line space-before-function-paren
  return function (_, col) {
    const width = getColWidth(state.colState, col);
    const id = `${row + 1}:${col}`;
    const data = state.dataState[id];
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        style="width: ${width}"
        data-id="${id}"
      >${data || ''}
      </div>
    `;
  };
}
function createColumn(col, index, colWidth) {
  return `
    <div 
      class="column" 
      data-type="resizable" 
      data-col="${index}" 
      style="width: ${colWidth}"
    >
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}
function createRow(index, content, state) {
  const resizer = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : '';
  const height = getRowHeight(state, index);
  return `
    <div 
      class="row" 
      data-type="resizable" 
      data-row="${index}"
      style="height: ${height}"
    >
      <div class="row-info">${index} 
        ${resizer}
      </div>  
      <div class="row-data">${content}</div>  
    </div>
  `;
}
function toChar(__, index) {
  return String.fromCharCode(CODES.A + index);
}
function toColumn({ col, index, colWidth }) {
  return createColumn(col, index, colWidth);
}

function withWidthFrom(state) {
  return (col, index) => {
    return {
      col,
      index,
      colWidth: getColWidth(state.colState, index),
    };
  };
}

export function createTable(rowsCount = 20, state = {}) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFrom(state))
    .map(toColumn)
    .join('');
  rows.push(createRow('', cols, state.rowState));
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(createCell(state, row))
      .join('');
    rows.push(createRow(row + 1, cells, state.rowState));
  }
  return rows.join('');
}
