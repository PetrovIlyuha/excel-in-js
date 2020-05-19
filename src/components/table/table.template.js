const CODES = {
  A: 65,
  Z: 91,
};
function createCell(row) {
  // eslint-disable-next-line space-before-function-paren
  return function (_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        data-id="${row + 1}:${col}"
      >
      </div>
    `;
  };
}
function createColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}
function createRow(index, content) {
  const resizer = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">${index} 
        ${resizer}
      </div>  
      <div class="row-data">${content}</div>  
    </div>
  `;
}
function toChar(el, index) {
  return String.fromCharCode(CODES.A + index);
}
function toColumn(el, index) {
  return createColumn(el, index);
}
export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');
  rows.push(createRow('', cols));
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount).fill('').map(createCell(row)).join('');
    rows.push(createRow(row + 1, cells));
  }
  return rows.join('');
}
